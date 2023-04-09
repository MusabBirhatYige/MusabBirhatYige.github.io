<?php




// Set the API endpoint and parameters
$api_endpoint = "https://openexchangerates.org/api/latest.json";
$app_id = "58fceb6bb3a446ce8b3afc604b14afef";
$api_params = array(
    "app_id" => $app_id,
    "symbols" => "USD,CAD,EUR",
);

// Fetch the currency rates from the API
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $api_endpoint . "?" . http_build_query($api_params));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($curl);
curl_close($curl);

$rates = array();

if ($response) {
    $data = json_decode($response, true);
    $rates["USD/CAD"] = $data["rates"]["CAD"] / $data["rates"]["USD"];
    $rates["USD/EUR"] = $data["rates"]["EUR"] / $data["rates"]["USD"];
    $rates["CAD/USD"] = $data["rates"]["USD"] / $data["rates"]["CAD"];
    $rates["EUR/USD"] = $data["rates"]["USD"] / $data["rates"]["EUR"];
    $rates["CAD/EUR"] = $data["rates"]["EUR"] / $data["rates"]["CAD"];
    $rates["EUR/CAD"] = $data["rates"]["CAD"] / $data["rates"]["EUR"];
} else {
    // Set default currency rates
    $rates["USD/CAD"] = 1.24;
    $rates["USD/EUR"] = 0.83;
    $rates["CAD/USD"] = 0.81;
    $rates["EUR/USD"] = 1.20;
    $rates["CAD/EUR"] = 0.67;
    $rates["EUR/CAD"] = 1.49;
}

// Get the input data from the user
$from_currency = isset($_POST["from_currency"]) ? $_POST["from_currency"] : "";
$to_currency = isset($_POST["to_currency"]) ? $_POST["to_currency"] : "";
$amount = isset($_POST["amount"]) ? $_POST["amount"] : "";

// Convert the currency
$rate_key = $from_currency . "/" . $to_currency;
$rate = isset($rates[$rate_key]) ? $rates[$rate_key] : 1;
$converted_amount = floatval($amount) * $rate;


// Display the result
if (!empty($from_currency) && !empty($to_currency) && !empty($amount)) {
    echo "<p>" . $amount . " " . $from_currency . " is equivalent to " . $converted_amount . " " . $to_currency . "</p>";
}

?>

<!-- Display the input form -->
<form style="position:relative;"  method="post" >
    <div>
        <label for="from_amount">From:</label>
        <input type="number" name="amount" id="from_amount" placeholder="0">
        <span>Currency: </span> 
        <select name="from_currency" id="from_currency">
            <option value="USD" <?php if ($from_currency == "USD") echo "selected"; ?>>USD</option>
            <option value="CAD" <?php if ($from_currency == "CAD") echo "selected"; ?>>CAD</option>
            <option value="EUR" <?php if ($from_currency == "EUR") echo "selected"; ?>>EUR</option>
        </select>
    </div>
    <div>
        <label for="to_amount">To:</label>
        <input type="number" name="to_amount" id="to_amount" placeholder="0">
        <span>Currency: </span>
        <select name="to_currency" id="to_currency">
            <option value="USD" <?php if ($to_currency == "USD") echo "selected"; ?>>USD</option>
            <option value="CAD" <?php if ($to_currency == "CAD") echo "selected"; ?>>CAD</option>
            <option value="EUR" <?php if ($to_currency == "EUR") echo "selected"; ?>>EUR</option>
        </select>
    </div>
    <div style="align-self: flex-end; margin-top: 10px; position:absolute; bottom:-26px; left:270px;">
        <input type="submit" value="Convert">
    </div>
</form>


<script>
    function convertCurrency() {
        var from_amount = document.getElementById("from_amount").value;
        var from_currency = document.getElementById("from_currency").value;
        var to_currency = document.getElementById("to_currency").value;
        var to_amount = document.getElementById("to_amount");
        
        // Convert the currency
        var rate_key = from_currency + "/" + to_currency;
        var rate = <?php echo json_encode($rates); ?>[rate_key] || 1;
        var converted_amount = parseFloat(from_amount) * rate;
        
        // Display the converted amount in the "To" textbox
        to_amount.value = converted_amount.toFixed(2);
    }
    
    // Attach the "convertCurrency" function to the "Convert" button click event
    var convert_button = document.querySelector("input[type='submit']");
    convert_button.addEventListener("click", convertCurrency);
</script>
