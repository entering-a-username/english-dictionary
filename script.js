var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function () {
    var input = document.getElementById("input");
    var infoText = document.getElementById("info-text");
    var meaningContainer = document.getElementById("meaning-container");
    var title = document.getElementById("title");
    var meaning = document.getElementById("meaning");
    var audio = document.getElementById("audio");
    input.addEventListener("keyup", function (e) {
        // e.target.value would be input value
        // e.key is key
        if (e.target.value && e.key === "Enter") {
            fetchAPI(e.target.value);
        }
    });
    function fetchAPI(word) {
        return __awaiter(this, void 0, void 0, function () {
            var url, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // waiting for the response
                        infoText.style.display = "block";
                        meaningContainer.style.display = "none";
                        infoText.innerText = "Searching the meaning of \"".concat(word, "\"");
                        url = "https://api.dictionaryapi.dev/api/v2/entries/en/".concat(word);
                        return [4 /*yield*/, fetch(url).then(function (res) { return res.json(); })];
                    case 1:
                        result = _a.sent();
                        // response comes
                        if (result.title) {
                            meaningContainer.style.display = "block";
                            infoText.style.display = "none";
                            title.innerText = word;
                            meaning.innerText = "Not Available";
                            audio.style.display = "none";
                        }
                        else {
                            infoText.style.display = "none";
                            meaningContainer.style.display = "block";
                            audio.style.display = "inline-flex";
                            title.innerText = result[0].word;
                            meaning.innerText = result[0].meanings[0].definitions[0].definition;
                            audio.src = result[0].phonetics[0].audio;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        infoText.innerText = "an error happened, try again later";
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
})();
