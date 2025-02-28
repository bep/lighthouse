/**
 * @license Copyright 2021 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const FRGatherer = require('../../fraggle-rock/gather/base-gatherer.js');
const {getBrowserVersion} = require('../driver/environment.js');

class HostUserAgent extends FRGatherer {
  static symbol = Symbol('HostUserAgent');

  /** @type {LH.Gatherer.GathererMeta} */
  meta = {
    symbol: HostUserAgent.symbol,
    supportedModes: ['snapshot', 'timespan', 'navigation'],
  };

  /**
   * @param {LH.Gatherer.FRTransitionalContext} context
   * @return {Promise<LH.Artifacts['HostUserAgent']>}
   */
  getArtifact(context) {
    return getBrowserVersion(context.driver.defaultSession).then(v => v.userAgent);
  }
}

module.exports = HostUserAgent;
