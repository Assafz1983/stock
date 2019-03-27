class DomManipulator {
    thresholdDom = document.getElementById('threshold');
    thresholdBtn = document.getElementById('thresholdBtn');
    symbolDom = document.getElementById('stock');
    symbolBtn = document.getElementById('stockBtn');
    errorMSG = document.getElementById('errMsg');


    getCurrentThreshold() {
        if (this.thresholdDom.value) {
            return Number(this.thresholdDom.value);
        } else {
            return 10;
        }
    }

    whenThresholdChange(func) {
        this.thresholdBtn.onclick = () => {
            const val = Number(this.thresholdDom.value);
            func(val);
        }
    }

    whenSymbolChange(func) {
        this.symbolBtn.onclick = () => {
            const val = this.symbolDom.value;
            func(val);
        }
    }

    presentErrorMessage(msg) {
        this.errorMSG.className = 'message shown';
        this.errorMSG.innerHTML = msg;
        setTimeout(() => {
            this.errorMSG.className = 'message hidden';
        }, 5000);
    }
}