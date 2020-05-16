var AllStudentsComponent = {
  render: function () {
    return `
    <div class="-all-students -page">
    <div class="-title">all students</div>
    <div class="-table-graph">
      <div class="-graph -inlineblock -vatop">
        <r-graph 
        value='0'
        vertices='[0.4, 0.45, 0.8, 0.663, 0.44, 0.53, 0.45, 0.85]'
        categories='["bible", "maths", "software design", "chemistry", "music", "physics", "biology", "hardware design" ]'
        ></r-graph>
        <div></div>
        <div class="-courses -inlineblock -vatop">
          <div class="-course -inlineblock -vatop">
            <div class="-course-info -name">bible</div><div class="-course-info -aggregate">0.4</div>
          </div><div class="-course -inlineblock -vatop">
            <div class="-course-info -name">mathematics</div><div class="-course-info -aggregate">0.45</div>
          </div><div class="-course -inlineblock -vatop">
            <div class="-course-info -name">software design</div><div class="-course-info -aggregate">0.8</div>
          </div><div class="-course -inlineblock -vatop">
            <div class="-course-info -name">chemistry</div><div class="-course-info -aggregate">0.663</div>
          </div><div class="-course -inlineblock -vatop">
            <div class="-course-info -name">music</div><div class="-course-info -aggregate">0.44</div>
          </div><div class="-course -inlineblock -vatop">
            <div class="-course-info -name">physics</div><div class="-course-info -aggregate">0.53</div>
          </div><div class="-course -inlineblock -vatop">
            <div class="-course-info -name">biology</div><div class="-course-info -aggregate">0.45</div>
          </div><div class="-course -inlineblock -vatop">
            <div class="-course-info -name">hardware design</div><div class="-course-info -aggregate">0.85</div>
          </div>
        </div>
      </div><div class="-table -inlineblock -vatop">
        <div class="-row -head">
          <div class="-col -position">pos</div><div class="-col -codename">nme</div><div class="-col -aggregate">aggregate</div><div class="-col -prize">prz</div>
        </div>
        <div class="-row" data-agg='[0.1, 0.95, 0.6, 0.663, 0.24, 0.53, 0.99, 0.21]'>
          <div class="-col -position">1</div><div class="-col -codename">Wumight</div><div class="-col -aggregate">6229.045</div><div class="-col -prize">76</div>
        </div>
        <div class="-row" data-agg='[0.8, 0.2, 0.95, 0.663, 0.24, 0.53, 0.99, 0.21]'>
          <div class="-col -position">2</div><div class="-col -codename">pink_femi838</div><div class="-col -aggregate">3934.419</div><div class="-col -prize">48</div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.3, 0.95, 0.24, 0.53, 0.99, 0.21]'>
          <div class="-col -position">3</div><div class="-col -codename">Dide4Life</div><div class="-col -aggregate">3389.065</div><div class="-col -prize">41</div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.6, 0.4, 0.95, 0.53, 0.99, 0.21]'>
          <div class="-col -position">4</div><div class="-col -codename">PreciousF234</div><div class="-col -aggregate">2937.019</div><div class="-col -prize">36</div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.6, 0.663, 0.5, 0.95, 0.99, 0.21]'>
          <div class="-col -position">5</div><div class="-col -codename">krystal</div><div class="-col -aggregate">2897.588</div><div class="-col -prize">37</div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.6, 0.663, 0.24, 0.6, 0.95, 0.21]'>
          <div class="-col -position">6</div><div class="-col -codename">Chocolate87</div><div class="-col -aggregate">2631.336</div><div class="-col -prize">33</div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.6, 0.663, 0.24, 0.53, 0.7, 0.95]'>
          <div class="-col -position">7</div><div class="-col -codename">Xx_panda_xX</div><div class="-col -aggregate">2356.502</div><div class="-col -prize">30</div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.6, 0.663, 0.24, 0.53, 0.95, 0.8]'>
          <div class="-col -position">8</div><div class="-col -codename">R3436</div><div class="-col -aggregate">1930.284</div><div class="-col -prize"></div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.6, 0.663, 0.24, 0.95, 0.9, 0.21]'>
          <div class="-col -position">9</div><div class="-col -codename">ini</div><div class="-col -aggregate">1658.295</div><div class="-col -prize"></div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.6, 0.663, 0.95, 0.1, 0.99, 0.21]'>
          <div class="-col -position">10</div><div class="-col -codename">fo</div><div class="-col -aggregate">1358.464</div><div class="-col -prize"></div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.6, 0.95, 0.2, 0.53, 0.99, 0.21]'>
          <div class="-col -position">11</div><div class="-col -codename">Dcyphr4u</div><div class="-col -aggregate">1309.965</div><div class="-col -prize"></div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.95, 0.3, 0.24, 0.53, 0.99, 0.21]'>
          <div class="-col -position">12</div><div class="-col -codename">pros353</div><div class="-col -aggregate">1288.329</div><div class="-col -prize"></div>
        </div>
        <div class="-row" data-agg='[0.8, 0.95, 0.4, 0.663, 0.24, 0.53, 0.99, 0.21]'>
          <div class="-col -position">13</div><div class="-col -codename">Lilshay</div><div class="-col -aggregate">1271.920</div><div class="-col -prize"></div>
        </div>
        <div class="-row" data-agg='[0.95, 0.5, 0.6, 0.663, 0.24, 0.53, 0.99, 0.21]'>
          <div class="-col -position">14</div><div class="-col -codename">Shepherd</div><div class="-col -aggregate">1260.839</div><div class="-col -prize"></div>
        </div>
        <div class="-row" data-agg='[0.6, 0.95, 0.6, 0.663, 0.24, 0.53, 0.99, 0.21]'>
          <div class="-col -position">15</div><div class="-col -codename">ladybug003</div><div class="-col -aggregate">1204.556</div><div class="-col -prize"></div>
        </div>
        <div class="-row" data-agg='[0.8, 0.7, 0.95, 0.663, 0.24, 0.53, 0.99, 0.21]'>
          <div class="-col -position">16</div><div class="-col -codename">7707T</div><div class="-col -aggregate">1038.508</div><div class="-col -prize"></div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.8, 0.95, 0.24, 0.53, 0.99, 0.21]'>
          <div class="-col -position">17</div><div class="-col -codename">GOAL23</div><div class="-col -aggregate">967.269</div><div class="-col -prize"></div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.6, 0.9, 0.24, 0.95, 0.99, 0.21]'>
          <div class="-col -position">18</div><div class="-col -codename">Presel</div><div class="-col -aggregate">877.852</div><div class="-col -prize"></div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.6, 0.663, 0.1, 0.53, 0.95, 0.21]'>
          <div class="-col -position">19</div><div class="-col -codename">591738</div><div class="-col -aggregate">762.652</div><div class="-col -prize"></div>
        </div>
        <div class="-row" data-agg='[0.8, 0.45, 0.6, 0.663, 0.24, 0.2, 0.99, 0.95]'>
          <div class="-col -position">20</div><div class="-col -codename">Lizzy</div><div class="-col -aggregate">567.930</div><div class="-col -prize"></div>
        </div>
      </div>
    </div>
  </div>
    `
  }
}