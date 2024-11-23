/** @license Blobity
 * Copyright (c) Georgy Marchuk.
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// this is here for webpack to expose Blobity as window.Blobity
import Blobity from './Blobity';
module.exports = Blobity;

const autoStart = document.querySelector(
    'script[src^="https://cdn.blobity.gmrchk.com/by.js"]'
) as HTMLScriptElement;
if (autoStart) {
    const url = new URL(autoStart.src);
    const params = url.searchParams;

    if (params.get('autoStart') !== null) {
        // @ts-ignore
        window.blobity = new Blobity({
            licenseKey: params.get('licenseKey'),
        });
    }
}
