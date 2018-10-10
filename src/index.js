import FontWeight from "./FontWeight";


function jsonToMap(jsonObj) {
    return new Map(Object.entries(jsonObj));
}

const ratioMaps = {
    [FontWeight.regular]: jsonToMap(require("./ratios/regular")),
    [FontWeight.medium]: jsonToMap(require("./ratios/medium")),
    [FontWeight.semiBold]: jsonToMap(require("./ratios/semiBold")),
};


function charCodeToFontSizeRatio(ratioMap, charCode) {
    if (charCode > 255) {
        return 1.005;
    }
    return ratioMap.get(charCode) || 0.5;
}


export default function stringDisplayWidth(str, fontSize, fontWeight = FontWeight.regular) {
    const ratioMap = ratioMaps[fontWeight];
    let rTotal = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        rTotal += charCodeToFontSizeRatio(ratioMap, c);
    }
    return rTotal * fontSize;
}

