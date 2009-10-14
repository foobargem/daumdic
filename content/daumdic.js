
var daumdicToolbar = {
	showMain: function () {
		var main_win = window.openDialog("chrome://daumdic/content/daumdicMain.xul", "Daum Dictionary", "chrome,titlebar,centerscreen,dialog=no");
		main_win.focus();
	},

	showMiniDic: function () {
		var minidic_win = window.openDialog("chrome://daumdic/content/daumMiniDicBrowser.xul", "Daum Mini Dictionary", "chrome,titlebar,centerscreen,dialog=no,width=450,height=500");
		minidic_win.focus();
	}
};


//-----------------------------------------------
// DaumDic
//-----------------------------------------------
var DaumDic = function () {
	var request_url = "http://engdic.daum.net/dicen/search.do?m=word&endic_kind=ek";
};

DaumDic.prototype.search = function () {
	var keyword = document.getElementById('keyword').value;
	if (!keyword) { return false; }

	this.request_url += '&q=' + encodeURIComponent(keyword);

	document.getElementById('action_container').setAttribute('src', this.request_url);

	var that = this;
	setTimeout(function(){ that.parseHTML(); }, 600);
};

DaumDic.prototype.parseHTML = function () {
	var ifrm = window.frames['action_container'];
	//alert(container.document.getElementById('dic_topBody'));

	var container = ifrm.document.getElementById('dic_topBody');
	document.getElementById('result').value = container.innerHTML;
};

var daumdic = new DaumDic();

