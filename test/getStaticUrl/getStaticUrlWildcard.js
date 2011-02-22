var one =
    {
        getStaticUrl: function (url) { // , placeHolderValue1, placeHolderValue2, ...
            var placeHolderValues = Array.prototype.slice.call(arguments, 1);
            return url.replace(/\*/g, function () {
                return placeHolderValues.shift();
            });
        }
    },
    theOneToGet = 'a',
    theThing = one.getStaticUrl('json/*.json', theOneToGet);
