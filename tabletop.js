function init() {
	console.log('init');
	Tabletop.init( { key: '1aw-lG77MkUB9volokjRMLgDNwyL_BWB3nHVhp3c1bGQ',
		callback: function(data, tabletop) {
			console.log(data)
		},
		simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)