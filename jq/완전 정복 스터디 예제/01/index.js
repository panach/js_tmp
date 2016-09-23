var $tabMenu = null,
	$menuItem = null,
	$selectMenuItem = null;

$(document).ready(function(){
	init();
	initEvent();

});

function init(){
	$tabMenu.on('click', function(){
		setSelectItem($(this));

	})
}

function setSelectItem($menuItem){
	if($selectMenuItem){
		$selectMenuItem.removeClass('select');
	}
	$selectMenuItem = $menuItem;
	$selectMenuItem.addClass('select');
}


/*


	바꿔 보장!!!


*/


var tabMenul = {
	$tabMenu: null,
	$menuItems: null,
	$selectMenuItem: null;
	init: function() {
		this.$tabMenu = $('#tabMenul');
		this.$menuItems = this.$tabMenu.find('li');
	},
	iniEvent: function() {
		var objThis =this; // 함수에 담지 않고 사용하게 되면 li 가 잡히게 되어 오류가 발생한다
		this.$menuItems.on('click',function() {
			objThis.setSelectItem($(this));
		});
	},
	setSelectItem: function($menuItem) {
		if(this.$selectMenuItem){
			this.$selectMenuItem.removeClass('select');
		}
		this.$selectMenuItem = $menuItem;
		this.$selectMenuItem.addClass('select');
	}
}

$(document).ready(function() {
	tabMenul.init();
	tabMenul.iniEvent();
});




