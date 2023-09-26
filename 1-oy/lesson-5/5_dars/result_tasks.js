/*
task - 12
        function getDepth(val) {
            if(Array.isArray(val)) {
                return 1 + Math.max(0, ...val.map(getDepth))
            }else {
                return 0
            }
        }
        let result = getDepth([[[[[[[[]]]]]]]])
        console.log(result);
*/