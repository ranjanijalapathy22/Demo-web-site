
document.getElementById("calculateBtn").addEventListener("click", function () {

    const areaInput = document.getElementById("area");
    const rainfallInput = document.getElementById("rainfall");
    const result = document.getElementById("result");

    const area = Number(areaInput.value);
    const rainfall = Number(rainfallInput.value);

    if (
        areaInput.value.trim() === "" ||
        rainfallInput.value.trim() === "" ||
        !Number.isFinite(area) ||
        !Number.isFinite(rainfall) ||
        area <= 0 ||
        rainfall < 0
    ) {
        result.textContent =
            "Please enter a valid roof area and rainfall.";
        return;
    }

    // 1 mm rainfall on 1 square metre = 1 litre of water.
    const water = area * rainfall;

    result.textContent =
        "Estimated rainwater collected: " +
        water.toLocaleString("en-IN", {
            maximumFractionDigits: 2
        }) +
        " litres (before collection losses).";

});

