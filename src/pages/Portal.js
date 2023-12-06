// @ts-nocheck
/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import Blits from '@lightningjs/blits'
import PortalRow from '../components/PortalRow.js'

import p from '../../package.json'

export default Blits.Component('Portal', {
  components: {
    PortalRow,
  },
  template: `
  <Element src="assets/pp.png" w="1920" h="1080" >
  <Element src="assets/rdklogo.png" w="300" h="65" x="70" y="50"/>
  <Element src="assets/alexa.png" w="170" h="150" x="1050" y="5"/>
  <Element src="assets/sett.png" w="100" h="100" x="1250" y="30"/>
  <Element src="assets/noti.png" w="100" h="100" x="1400" y="30"/>
  <Element src="assets/facebook.png" w="100" h="100" x="120" y="350"/>
  <Element src="assets/bookmark.png" w="100" h="95" x="300" y="350"/>
  <Element src="assets/share.png" w="100" h="100" x="480" y="350"/>
  <Element src="assets/info.png" w="100" h="100" x="640" y="350"/>

      <PortalRow  y="140" mountY="0.5" h="500" :y.transition="-$rowFocused * 500 + 550" title="Feature video on Demand" items="$demo" ref="row0" />
     <!-- <Element w="1920" h="200" color="#44037a">
        <Element w="1920" h="70" y="200" color="{top: '#44037a'}"/>
        <Element :y.transition="{value: 80 - $logoOffset, duration: 400}">
          <Element src="assets/blits-logo-full.png" w="200" h="112" x="60" />
          <Element w="2" h="120" y="-10" color="#ffffff80" x="300" />
          <Element x="320" y="16">
            <Text y="0" size="36">Example App</Text>
            <Text y="50" size="24">v{{$version}}</Text>
          </Element>
        </Element>
      </Element>-->
    </Element>`,
  state() {
    return {
      version: p.version,
      offset: 60,
      rowFocused: 0,
      rows: ['demo'],
      logoOffset: 50,
      demo: [
        {
          title: 'Loader',
          id: 'demos/loading',
          description: 'A basic loading screen',
          imageSrc: 'assets/cardImage1.jpg',
        },
      ],
    }
  },
  hooks: {
    ready() {
      this.logoOffset = 0
      this.$trigger('rowFocused')
    },
  },
  watch: {
    rowFocused(v) {
      const row = this.select(`row${v}`)
      if (row && row.focus) row.focus()
    },
  },
  input: {
    // up() {
    //   this.rowFocused = (this.rowFocused - 1 + this.rows.length) % this.rows.length
    // },
    // down() {
    //   this.rowFocused = (this.rowFocused + 1) % this.rows.length
    // },
  },
})
