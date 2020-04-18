var StudentProfile = {
  render: function () {
    return `
    <div class="-student-profile -page">
    <div class="-title">student profile</div>
    <div class="-bio -profile -inlineblock -vatop -bg-white">
      <div class="-radargraph">
        radargraph
      </div>
      <div class="-data">
        <div class="-name">
          <div class="-caption">name</div>
          <div class="-value">Fly Zend</div>
        </div>
        <div class="-codename">
          <div class="-caption">codename</div>
          <div class="-value">fz</div>
        </div>
        <div class="-email">
          <div class="-caption">email</div>
          <div class="-value">fly@gmail.com</div>
        </div>
        <div class="-gender">
          <div class="-caption">gender</div>
          <div class="-value">female</div>
        </div>
        <div class="-earned">
          <div class="-caption">earned</div>
          <div class="-value">$300</div>
        </div>
        <div class="-points">
          <div class="-caption">points</div>
          <div class="-value">3,240</div>
        </div>
        <div class="-description">
          <div class="-caption">description</div>
          <div class="-value">I love coding</div>
        </div>
      </div>
    </div>
    <div class="-details -profile -inlineblock -vatop -bg-white">
      <div class="-tabs">
        <div class="-tab -posrel active">
          <span>account information</span>
        </div>
        <div class="-tab -posrel">
          <span>course information</span>
        </div>
      </div>
      <div class="-tab-contents">
        <div class="-tab-content -account active">
          form
        </div>
        <div class="-tab-content">
          <div class="-courses -inlineblock -vatop">
            <div class="-course -card -inlineblock -vatop">
              course 1
            </div><div class="-course -card -inlineblock -vatop">
              course 2
            </div><div class="-course -card -inlineblock -vatop">
              course 3
            </div><div class="-course -card -inlineblock -vatop">
              course 4
            </div><div class="-course -card -inlineblock -vatop">
              course 5
            </div><div class="-course -card -inlineblock -vatop">
              course 6
            </div><div class="-course -card -inlineblock -vatop">
              course 7
            </div><div class="-course -card -inlineblock -vatop">
              course 8
            </div>
          </div>
          <div class="-course-history -inlineblock -vatop">
            course history
          </div>
        </div>
      </div>
    </div>
  </div>
    `
  }
}