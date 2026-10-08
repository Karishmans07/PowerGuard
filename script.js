function calculateUsage() {

    let previous = Number(
        document.getElementById("previousReading").value
    );

    let current = Number(
        document.getElementById("currentReading").value
    );

    // Normal daily consumption
    let normalUsage = 8;

    // Demo electricity tariff
    let tariff = 7;


    // Check input
    if (previous === 0 || current === 0) {

        document.getElementById("result").className = "result-card";

        document.getElementById("result").innerHTML = `
            <div class="result-icon">⚠️</div>

            <div>
                <h3>Please enter both readings</h3>
                <p>
                    Enter your previous and current meter readings.
                </p>
            </div>
        `;

        return;
    }


    // Check reading
    if (current < previous) {

        document.getElementById("result").className = "result-card";

        document.getElementById("result").innerHTML = `
            <div class="result-icon">❌</div>

            <div>
                <h3>Invalid Meter Reading</h3>

                <p>
                    Current reading must be greater than
                    the previous reading.
                </p>
            </div>
        `;

        return;
    }


    // Calculate today's consumption
    let usage = current - previous;


    // Percentage increase
    let increase =
        ((usage - normalUsage) / normalUsage) * 100;


    // Estimate monthly consumption
    let monthlyUsage = usage * 30;


    // Estimate monthly electricity cost
    let estimatedBill = monthlyUsage * tariff;


    // NORMAL
    if (usage <= normalUsage * 1.2) {

        document.getElementById("result").className =
            "result-card result-normal";

        document.getElementById("result").innerHTML = `

            <div class="result-icon">🟢</div>

            <div>

                <h3>Consumption Normal</h3>

                <p>
                    Today's consumption:
                    <strong>${usage} units</strong>
                </p>

                <p>
                    Normal consumption:
                    <strong>${normalUsage} units/day</strong>
                </p>

                <p>
                    Estimated monthly usage:
                    <strong>${monthlyUsage} units</strong>
                </p>

                <p>
                    Estimated monthly cost:
                    <strong>₹${estimatedBill.toFixed(0)}</strong>
                </p>

                <p>
                    Your electricity usage is within
                    the normal range.
                </p>

            </div>
        `;
    }


    // WARNING
    else if (usage <= normalUsage * 1.5) {

        document.getElementById("result").className =
            "result-card result-warning";

        document.getElementById("result").innerHTML = `

            <div class="result-icon">🟡</div>

            <div>

                <h3>Unusual Consumption</h3>

                <p>
                    Today's consumption:
                    <strong>${usage} units</strong>
                </p>

                <p>
                    Increase from normal:
                    <strong>${increase.toFixed(1)}%</strong>
                </p>

                <p>
                    Estimated monthly usage:
                    <strong>${monthlyUsage} units</strong>
                </p>

                <p>
                    Estimated monthly cost:
                    <strong>₹${estimatedBill.toFixed(0)}</strong>
                </p>

                <p>
                    ⚠️ Your current usage may increase
                    your monthly electricity cost.
                </p>

            </div>
        `;
    }


    // HIGH RISK
    else {

        document.getElementById("result").className =
            "result-card result-danger";

        document.getElementById("result").innerHTML = `

            <div class="result-icon">🔴</div>

            <div>

                <h3>High Consumption Detected</h3>

                <p>
                    Today's consumption:
                    <strong>${usage} units</strong>
                </p>

                <p>
                    Normal consumption:
                    <strong>${normalUsage} units/day</strong>
                </p>

                <p>
                    Increase from normal:
                    <strong>${increase.toFixed(1)}%</strong>
                </p>

                <p>
                    Estimated monthly usage:
                    <strong>${monthlyUsage} units</strong>
                </p>

                <p>
                    Estimated monthly cost:
                    <strong>₹${estimatedBill.toFixed(0)}</strong>
                </p>

                <p>
                    🚨 If this consumption continues,
                    your electricity cost may become significantly higher.
                </p>

                <p>
                    <strong>Recommended:</strong>
                    Check AC, heater, geyser and other
                    high-power appliances.
                </p>

            </div>
        `;
    }
}
