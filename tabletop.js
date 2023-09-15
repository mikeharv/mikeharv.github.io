function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1aw-lG77MkUB9volokjRMLgDNwyL_BWB3nHVhp3c1bGQ/pubhtml',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)