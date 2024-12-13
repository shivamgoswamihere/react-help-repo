import React, { useState } from "react";
function ToggleTheme() {
const [isDark, setIsDark] = useState(false);
return (
<div style={{ backgroundColor: isDark ? "black" : "white", color: isDark ? "white"
: "black" }}>
<p>The current theme is {isDark ? "Dark" : "Light"}.</p>
<button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
</div>
);
}
export default ToggleTheme;

// use ToggleTheme component in App.js to render it in web application