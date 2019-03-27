export class ObjectUtil {
    public static equals(a: any, b: any): boolean {
        const countProps = (obj) => {
            let count = 0;
            for (const k in obj) {
                if (obj.hasOwnProperty(k)) {
                    count++;
                }
            }
            return count;
        };

        const objectEquals = (v1: any, v2: any) => {
            if (typeof(v1) !== typeof(v2)) {
                return false;
            }

            if (typeof(v1) === 'function') {
                return v1.toString() === v2.toString();
            }

            if (v1 instanceof Object && v2 instanceof Object) {
                if (countProps(v1) !== countProps(v2)) {
                    return false;
                }

                let r = true;

                for (const k in v1) {
                    r = objectEquals(v1[k], v2[k]);
                    if (!r) {
                        return false;
                    }
                }
                return true;
            } else {
                return v1 === v2;
            }
        };

        return objectEquals(a, b);
    }
}