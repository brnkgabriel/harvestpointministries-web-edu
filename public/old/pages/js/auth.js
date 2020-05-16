var AuthComponent = {
  render: function () {
    return `
    <div class="-auth form-1">
    <p class="field">
      <input type="text" name="login" placeholder="username or email" id="login" />
      <icon>👨</icon>
    </p>
    <p class="field">
      <input type="password" name="password" placeholder="password" id="password" />
      <icon>🔒</icon>
    </p>
    <p class="submit">
      <button id="submit" type="submit" name="submit"></button>
    </p>
  </div>
    `
  }
}