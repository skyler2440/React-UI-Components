import React from 'react';
import './Header.css';

function Header() {
     return(
    <div class="App">
        <HeaderTitle />
        <HeaderContent />

    </div>
     );
}
function HeaderTitle() {
    return(
<h3>Lambda School</h3>
    );
}

export default Header;