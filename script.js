const priceMinSlider = document.getElementById('priceMin');
            const priceMaxSlider = document.getElementById('priceMax');
            const priceMinValue = document.getElementById('priceMinValue');
            const priceMaxValue = document.getElementById('priceMaxValue');

            priceMinSlider.addEventListener('input', updatePriceMin);
            priceMaxSlider.addEventListener('input', updatePriceMax);

            function updatePriceMin() {
                priceMinValue.textContent = `${priceMinSlider.value} €`;
            }

            function updatePriceMax() {
                priceMaxValue.textContent = `${priceMaxSlider.value} €`;
            }