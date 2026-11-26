<?php
/**
 * AromaBites Lead Handler API
 * Sends incoming tiffin subscription leads directly to leads@aromabites.in
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json; charset=UTF-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed. Use POST."]);
    exit();
}

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    $data = $_POST;
}

$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$contactNo = isset($data['contactNo']) ? trim(strip_tags($data['contactNo'])) : '';
$email = isset($data['email']) ? trim(strip_tags($data['email'])) : '';
$street = isset($data['streetAddress']) ? trim(strip_tags($data['streetAddress'])) : '';
$city = isset($data['city']) ? trim(strip_tags($data['city'])) : '';
$district = isset($data['district']) ? trim(strip_tags($data['district'])) : '';
$state = isset($data['state']) ? trim(strip_tags($data['state'])) : '';
$country = isset($data['country']) ? trim(strip_tags($data['country'])) : 'India';
$package = isset($data['packageSelection']) ? trim(strip_tags($data['packageSelection'])) : 'Bespoke Plan';
$slot = isset($data['tastingSlot']) ? trim(strip_tags($data['tastingSlot'])) : 'Lunch - 1 PM';
$notes = isset($data['descriptionAllergies']) ? trim(strip_tags($data['descriptionAllergies'])) : 'None';

// Validation
if (empty($name) || empty($contactNo)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Name and Contact Number are required."]);
    exit();
}

$to = "leads@aromabites.in";
$subject = "new enquiry";

$fullAddress = implode(", ", array_filter([$street, $city, $district, $state, $country]));

// HTML Email Body
$message = '
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; background-color: #F9F7E8; color: #133E2B; margin: 0; padding: 20px; }
    .card { background: #ffffff; border-radius: 16px; max-width: 600px; margin: 0 auto; padding: 30px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 6px solid #0D3823; }
    .brand { color: #0D3823; font-size: 24px; font-weight: 800; text-transform: uppercase; margin-bottom: 5px; }
    .badge { background: #C6F035; color: #0D3823; padding: 4px 12px; border-radius: 20px; font-weight: bold; font-size: 12px; display: inline-block; margin-bottom: 20px; }
    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
    td { padding: 10px 12px; border-bottom: 1px solid #f0f0f0; font-size: 14px; }
    td.label { font-weight: bold; color: #555; width: 35%; background: #fafafa; }
    td.value { color: #133E2B; font-weight: 600; }
    .footer { font-size: 11px; color: #888; text-align: center; margin-top: 25px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="brand">AromaBites</div>
    <div class="badge">NEW ENQUIRY RECEIVED</div>
    <p>A new customer has submitted their meal plan request on your website.</p>
    <table>
      <tr><td class="label">Customer Name</td><td class="value">' . htmlspecialchars($name) . '</td></tr>
      <tr><td class="label">Contact Number</td><td class="value"><a href="tel:' . htmlspecialchars($contactNo) . '" style="color:#0D3823;">' . htmlspecialchars($contactNo) . '</a></td></tr>
      <tr><td class="label">Email Address</td><td class="value">' . ($email ? htmlspecialchars($email) : 'Not provided') . '</td></tr>
      <tr><td class="label">Package Plan</td><td class="value" style="color:#0D3823;">' . htmlspecialchars($package) . '</td></tr>
      <tr><td class="label">Tasting Slot</td><td class="value">' . htmlspecialchars($slot) . '</td></tr>
      <tr><td class="label">Full Address</td><td class="value">' . htmlspecialchars($fullAddress) . '</td></tr>
      <tr><td class="label">Preferences / Notes</td><td class="value">' . nl2br(htmlspecialchars($notes)) . '</td></tr>
      <tr><td class="label">Timestamp</td><td class="value">' . date("d M Y, h:i A T") . '</td></tr>
    </table>
    <div class="footer">
      Sent automatically via AromaBites Lead System • <a href="https://aromabites.in" style="color:#888;">aromabites.in</a>
    </div>
  </div>
</body>
</html>
';

// Email Headers (From: noreply@aromabites.in)
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: AromaBites <noreply@aromabites.in>',
    'Reply-To: ' . ($email ?: 'noreply@aromabites.in'),
    'X-Mailer: PHP/' . phpversion()
];

$mailSent = @mail($to, $subject, $message, implode("\r\n", $headers));

// -------------------------------------------------------------
// Autoresponder Thank You Email to Customer
// -------------------------------------------------------------
$customerMailSent = false;
if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $customerSubject = "Thank You for Submitting Your Enquiry - AromaBites";
    $customerHeaders = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: AromaBites <noreply@aromabites.in>',
        'Reply-To: AromaBites Support <leads@aromabites.in>',
        'X-Mailer: PHP/' . phpversion()
    ];

    $customerMessage = '
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; background-color: #F9F7E8; color: #133E2B; margin: 0; padding: 20px; }
    .card { background: #ffffff; border-radius: 16px; max-width: 600px; margin: 0 auto; padding: 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 6px solid #0D3823; }
    .brand { color: #0D3823; font-size: 26px; font-weight: 800; text-transform: uppercase; margin-bottom: 4px; }
    .tagline { color: #E86E37; font-size: 14px; font-weight: 600; margin-bottom: 20px; }
    .greeting { font-size: 18px; font-weight: 700; color: #0D3823; margin-top: 10px; }
    p { font-size: 14px; line-height: 1.6; color: #333; }
    .summary-box { background: #F9F7E8; border-radius: 12px; padding: 18px; margin: 20px 0; border: 1px solid #e8e3c5; }
    .summary-title { font-weight: 700; font-size: 13px; text-transform: uppercase; color: #0D3823; margin-bottom: 10px; }
    .summary-item { font-size: 13px; margin-bottom: 6px; color: #444; }
    .summary-item strong { color: #0D3823; }
    .support-note { font-size: 13px; color: #555; background: #f0f7f2; border-left: 4px solid #0D3823; padding: 10px 14px; margin: 20px 0; border-radius: 4px; }
    .footer { font-size: 11px; color: #888; text-align: center; margin-top: 30px; border-top: 1px solid #eee; padding-top: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="brand">AromaBites</div>
    <div class="tagline">Personalized Healthy Tiffin Service</div>

    <div class="greeting">Hi ' . htmlspecialchars($name) . ',</div>
    <p>Thank you for submitting your enquiry with AromaBites! We have received your request and our certified nutrition team is currently reviewing your preferences.</p>

    <div class="summary-box">
      <div class="summary-title">Your Plan Enquiry Summary</div>
      <div class="summary-item"><strong>Selected Plan:</strong> ' . htmlspecialchars($package) . '</div>
      <div class="summary-item"><strong>Preferred Tasting Slot:</strong> ' . htmlspecialchars($slot) . '</div>
      <div class="summary-item"><strong>Contact Number:</strong> ' . htmlspecialchars($contactNo) . '</div>
      ' . ($fullAddress ? '<div class="summary-item"><strong>Delivery Area:</strong> ' . htmlspecialchars($fullAddress) . '</div>' : '') . '
    </div>

    <div class="support-note">
      <strong>What happens next?</strong><br>
      Our team will reach out to you on <strong>' . htmlspecialchars($contactNo) . '</strong> shortly to confirm your custom tasting schedule and answer any questions.
    </div>

    <p>If you have any urgent queries, feel free to reply directly to this email or reach us at <a href="mailto:leads@aromabites.in" style="color:#0D3823;font-weight:bold;">leads@aromabites.in</a>.</p>

    <div class="footer">
      Warm regards,<br>
      <strong>Team AromaBites</strong><br>
      <a href="https://aromabites.in" style="color:#888;">www.aromabites.in</a>
    </div>
  </div>
</body>
</html>
    ';

    $customerMailSent = @mail($email, $customerSubject, $customerMessage, implode("\r\n", $customerHeaders));
}

// Also save lead to a local JSON log file for safe backup
$logEntry = [
    "timestamp" => date("c"),
    "name" => $name,
    "contactNo" => $contactNo,
    "email" => $email,
    "address" => $fullAddress,
    "package" => $package,
    "slot" => $slot,
    "notes" => $notes,
    "mailSent" => $mailSent
];
@file_put_contents(__DIR__ . '/leads_backup.json', json_encode($logEntry, JSON_PRETTY_PRINT) . PHP_EOL, FILE_APPEND);

if ($mailSent) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Lead sent successfully to " . $to]);
} else {
    // Return 200 with saved status so customer form succeeds even if sendmail is slow
    echo json_encode(["status" => "saved", "message" => "Lead captured in leads_backup.json"]);
}
?>
