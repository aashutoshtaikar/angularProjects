class Color{
    lightenDarkenColor(col, amt) {
        if (col.substring(0,3)==='rgb') {
            col = this.parseColor(col).hex;
            console.log(col);
        }
        var usePound = false;
    
        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }
    
        var num = parseInt(col, 16);
    
        var r = (num >> 16) + amt;
    
        if (r > 255) r = 255;
        else if (r < 0) r = 0;
    
        var b = ((num >> 8) & 0x00FF) + amt;
    
        if (b > 255) b = 255;
        else if (b < 0) b = 0;
    
        var g = (num & 0x0000FF) + amt;
    
        if (g > 255) g = 255;
        else if (g < 0) g = 0;
    
    
        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    
    }
    
    parseColor(color) {
        var arr=[]; color.replace(/[\d+\.]+/g, function(v) { arr.push(parseFloat(v)); });
        return {
            hex: "#" + arr.slice(0, 3).map(this.toHex).join(""),
            opacity: arr.length == 4 ? arr[3] : 1
        };
    }

    toHex(int) {
        var hex = int.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
}