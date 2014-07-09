﻿var Humanizer;
(function (Humanizer) {
    var Truncator = (function () {
        function Truncator() {
        }
        Truncator.FixedLength = new Humanizer.FixedLengthTruncator();
        Truncator.FixedNumberOfCharacters = new Humanizer.FixedNumberOfCharactersTruncator();
        Truncator.FixedNumberOfWords = new Humanizer.FixedNumberOfWordsTruncator();
        return Truncator;
    })();
    Humanizer.Truncator = Truncator;
})(Humanizer || (Humanizer = {}));
//# sourceMappingURL=truncator.js.map