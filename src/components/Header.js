import React from 'react';

const Header=() => {
  return(
    <table className="titleBar">
      <tbody>
        <tr>
          <td><img alt="app_icon" width="50" src="movie_icon.svg" /></td>
          <td width="8"/>
          <td><h1>Movies Search</h1></td>
        </tr>
      </tbody>
    </table>
  )
}

export default Header;