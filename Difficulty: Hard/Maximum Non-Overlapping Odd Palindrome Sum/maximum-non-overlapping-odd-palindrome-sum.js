class Solution {
    manacherArray(s) {
        const ms = '@#' + s.split('').join('#') + '#$';
        const n = ms.length;
        const p = new Array(n).fill(0);

        let l = 0, r = 0;
        for (let i = 1; i < n - 1; i++) {
            const mirror = l + r - i;
            if (mirror >= 0 && mirror < n) {
                p[i] = Math.max(0, Math.min(r - i, p[mirror]));
            }

            while (
                i + p[i] + 1 < n &&
                i - p[i] - 1 >= 0 &&
                ms[i + 1 + p[i]] === ms[i - 1 - p[i]]
            ) {
                p[i]++;
            }

            if (i + p[i] > r) {
                l = i - p[i];
                r = i + p[i];
            }
        }

        return { p, ms };
    }

    getLongest(cen, odd, p) {
        const pos = 2 * cen + 2 + (odd === 0 ? 1 : 0);
        return p[pos];
    }

    maxSum(s) {
        const n = s.length;
        const leftMark = new Array(n).fill(1);
        const rightMark = new Array(n).fill(1);

        const { p } = this.manacherArray(s);

        for (let i = 0; i < n; i++) {
            const val = this.getLongest(i, 1, p);
            const li = i + Math.floor(val / 2);
            if (li < n) {
                leftMark[li] = Math.max(leftMark[li], val);
            }
        }

        for (let i = n - 2; i >= 0; i--) {
            leftMark[i] = Math.max(leftMark[i], leftMark[i + 1] - 2);
        }

        for (let i = 1; i < n; i++) {
            leftMark[i] = Math.max(leftMark[i], leftMark[i - 1]);
        }

        for (let i = n - 1; i >= 0; i--) {
            const val = this.getLongest(i, 1, p);
            const ri = i - Math.floor(val / 2);
            if (ri >= 0) {
                rightMark[ri] = Math.max(rightMark[ri], val);
            }
        }

        for (let i = 1; i < n; i++) {
            rightMark[i] = Math.max(rightMark[i], rightMark[i - 1] - 2);
        }

        for (let i = n - 2; i >= 0; i--) {
            rightMark[i] = Math.max(rightMark[i], rightMark[i + 1]);
        }

        let ans = 0;
        for (let i = 0; i + 1 < n; i++) {
            ans = Math.max(ans, leftMark[i] + rightMark[i + 1]);
        }

        return ans;
    }
}
