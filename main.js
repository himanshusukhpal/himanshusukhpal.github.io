(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function AppComponent_ng_container_46_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_46_ng_container_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ele_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteFile(ele_r1.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_46_ng_container_1_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ele_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.showRenameFile(ele_r1.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ele_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ele_r1.value, " ");
} }
function AppComponent_ng_container_46_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function AppComponent_ng_container_46_ng_template_2_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ele_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.changeFolder(ele_r1.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_46_ng_template_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ele_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.deleteFolder(ele_r1.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_46_ng_template_2_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ele_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.showRenameFolder(ele_r1.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ele_r1.key, " ");
} }
function AppComponent_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_46_ng_container_1_Template, 9, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_46_ng_template_2_Template, 8, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ele_r1 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.checkIfArray(ele_r1))("ngIfElse", _r4);
} }
class AppComponent {
    constructor() {
        this.title = 'tdrive';
        this.tree = new Array();
        this.path = "Folders";
        this.tree[0] = "file1";
        this.tree[1] = "file2";
        this.tree["folder0"] = new Array();
        this.tree["folder0"][0] = "file01";
        this.tree["folder0"][1] = "file02";
        this.tree["folder0"]["folder00"] = new Array();
        this.tree["folder0"]["folder00"][0] = "file001";
        this.tree["folder0"]["folder00"][1] = "file002";
        this.folder = this.tree;
    }
    ToggleExplore() {
        document.getElementById("explorer").classList.toggle("open");
    }
    ;
    toggleList(index) {
        document.getElementById("parent" + index).classList.toggle("caret-down");
        document.getElementById("branch" + index).classList.toggle("closelist");
    }
    ;
    checkIfArray(ele) {
        if (ele.value instanceof Array)
            return true;
        else
            return false;
    }
    changeFolder(foldername) {
        this.folder = this.folder[foldername];
        this.path += " > " + foldername;
    }
    backpress() {
        var destArr = this.path.split(" > ");
        if (destArr.length > 1) {
            destArr.pop();
            if (destArr.length > 1) {
                var interArr = this.tree;
                for (var i = 1; i < destArr.length; i++) {
                    interArr = interArr[destArr[i]];
                }
                this.folder = interArr;
                this.path = destArr.join(" > ");
            }
            else {
                this.folder = this.tree;
                this.path = "Folders";
            }
        }
    }
    showaddFolder() {
        document.getElementById("modal").style.display = "block";
        document.getElementById("addFolderInput").style.display = "block";
    }
    addFolder() {
        var foname = document.getElementById("InputFoldername").value;
        foname = foname.toLowerCase();
        foname = foname.trim();
        if (foname != "") {
            if (typeof this.folder[foname] == 'undefined') {
                this.folder[foname] = new Array();
            }
            else
                alert("A folder with that name already exists");
        }
        else
            alert("Enter a Folder name please");
        document.getElementById("InputFoldername").value = "";
        this.closemodal();
    }
    showaddFile() {
        document.getElementById("modal").style.display = "block";
        document.getElementById("addFileInput").style.display = "block";
    }
    addFile() {
        var effname = document.getElementById("InputFilename").value;
        effname = effname.toLowerCase();
        effname = effname.trim();
        var c = true;
        this.folder.forEach(function (x) {
            if (effname == x)
                c = false;
        });
        if (effname != "") {
            if (c) {
                this.folder.push(effname);
            }
            else
                alert("A file with that name already exists");
        }
        else
            alert("Enter a File name please");
        document.getElementById("InputFilename").value = "";
        this.closemodal();
    }
    deleteFile(key) {
        this.folder.splice(key, 1);
    }
    deleteFolder(key) {
        delete this.folder[key];
    }
    showRenameFile(key) {
        this.filerenamer = key;
        document.getElementById("modal").style.display = "block";
        document.getElementById("renameFileInput").style.display = "block";
    }
    renameFile() {
        var effname = document.getElementById("InputFileRename").value;
        effname = effname.toLowerCase();
        effname = effname.trim();
        var c = true;
        this.folder.forEach(function (x) {
            if (effname == x)
                c = false;
        });
        if (effname != "") {
            if (c) {
                this.folder[this.filerenamer] = effname;
            }
            else
                alert("A file with that name already exists");
        }
        else
            alert("Enter a File name please");
        document.getElementById("InputFileRename").value = "";
        this.closemodal();
    }
    showRenameFolder(key) {
        this.folderrenamer = key;
        document.getElementById("modal").style.display = "block";
        document.getElementById("renameFolderInput").style.display = "block";
    }
    renameFolder() {
        var foname = document.getElementById("InputFolderRename").value;
        foname = foname.toLowerCase();
        foname = foname.trim();
        if (foname != "") {
            if (typeof this.folder[foname] == 'undefined') {
                this.folder[foname] = this.folder[this.folderrenamer];
                delete this.folder[this.folderrenamer];
            }
            else
                alert("A folder with that name already exists");
        }
        else
            alert("Enter a Folder name please");
        document.getElementById("InputFolderRename").value = "";
        this.closemodal();
    }
    closemodal() {
        document.getElementById("modal").style.display = "none";
        document.getElementById("addFileInput").style.display = "none";
        document.getElementById("addFolderInput").style.display = "none";
        document.getElementById("renameFileInput").style.display = "none";
        document.getElementById("renameFolderInput").style.display = "none";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 49, vars: 4, consts: [["role", "banner", 1, "toolbar"], [1, "right"], [1, "right-title"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], ["id", "page"], ["id", "main"], [1, "full-container"], ["id", "main-head"], ["id", "backbtn", 3, "click"], ["id", "breadcrumbs"], [1, "adfoicons"], [3, "click"], [1, "mdi", "mdi-file-plus"], [1, "mdi", "mdi-folder-plus"], ["id", "main-body"], ["id", "modal"], ["id", "modal-content"], [1, "modal-close", 3, "click"], ["id", "addFileInput"], ["id", "InputFilename"], ["id", "addFolderInput"], ["id", "InputFoldername"], ["id", "renameFileInput"], ["id", "InputFileRename"], ["id", "renameFolderInput"], ["id", "InputFolderRename"], [4, "ngFor", "ngForOf"], ["id", "footer"], [4, "ngIf", "ngIfElse"], ["FolderBlock", ""], [1, "card"], [1, "card-delete", "mdi", "mdi-delete", 3, "click"], [1, "card-icon"], [1, "mdi", "mdi-file"], [1, "card-title"], [1, "cartelame"], [1, "card-rename", "mdi", "mdi-pencil", 3, "click"], [1, "card", 3, "dblclick"], [1, "mdi", "mdi-folder"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_9_listener() { return ctx.backpress(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_14_listener() { return ctx.showaddFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " New File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_18_listener() { return ctx.showaddFolder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " New Folder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_24_listener() { return ctx.closemodal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_29_listener() { return ctx.addFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Create File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_34_listener() { return ctx.addFolder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Create Folder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_39_listener() { return ctx.renameFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Rename File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_44_listener() { return ctx.renameFolder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Rename Folder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AppComponent_ng_container_46_Template, 4, 2, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 27);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.path, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 2, ctx.folder));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]], styles: ["[_nghost-%COMP%] {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    margin: 8px 0;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n\tpadding: 2px 10px;\r\n\tz-index: 10;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 0 16px;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    margin: 0 16px;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .right-title[_ngcontent-%COMP%] {\r\n\tmargin:auto;\r\n\ttext-align:center;\r\n  }\r\n\r\n  .right[_ngcontent-%COMP%] {\r\n\tdisplay:flex;\r\n\ttext-align:center;\r\n\tvertical-align:middle;\r\n\tright:0;\r\n\tposition:absolute;\r\n\tfloat:right;\r\n  }\r\n\r\n  .left-icon[_ngcontent-%COMP%] {\r\n\tdisplay:none;\r\n\tleft:0;\r\n  }\r\n\r\n  .full-container[_ngcontent-%COMP%] {\r\n\tmargin: 10px;\r\n\tpadding: 10px;\r\n\toverflow:auto;\r\n  }\r\n\r\n  #page[_ngcontent-%COMP%] {\r\n\tposition:absolute;\r\n\tmargin-top:60px;\r\n\tmargin-bottom:30px;\r\n\tleft:0;\r\n\tright:0;\r\n\ttop:0;\r\n\tbottom:0;\r\n\tbackground: #F5F5F5;\r\n\tdisplay : flex;\r\n\twidth:100%;\r\n  }\r\n\r\n  #explorer[_ngcontent-%COMP%] {\r\n\tmargin: auto;\r\n\tbackground:white;\r\n\tborder-radius:2%;\r\n\tbox-shadow: 2px 2px 10px -8px #000, -2px -2px 5px -10px #000;\r\n\toverflow:auto;\r\n\tz-index:9;\r\n\twidth:20%;\r\n\theight:95%;\r\n\tleft:0;\r\n\twhite-space: nowrap;\r\n  }\r\n\r\n  ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%] {\r\n\t  list-style-type: none;\r\n\t  padding: 0;\r\n\t  margin: 0 0 0 10px;\r\n\t}\r\n\r\n  #myUL[_ngcontent-%COMP%] {\r\n\t  margin: 0 0 0 10px;\r\n\t}\r\n\r\n  .caret[_ngcontent-%COMP%] {\r\n\t  margin-left: -15px;\r\n\t  cursor: pointer;\r\n\t  -webkit-user-select: none;   \r\n\t  user-select: none;\r\n\t}\r\n\r\n  .caret[_ngcontent-%COMP%]::before {\r\n\t  content: \"\\25B7\";\r\n\t  color: black;\r\n\t  display: inline-block;\r\n\t  margin-right: 3px;\r\n\t}\r\n\r\n  .caret-down[_ngcontent-%COMP%]::before {  \r\n\t  transform: rotate(90deg);  \r\n\t}\r\n\r\n  .openlist[_ngcontent-%COMP%] {\r\n\t  display: block;\r\n\t}\r\n\r\n  .closelist[_ngcontent-%COMP%] {\r\n\t  display: none;\r\n\t}\r\n\r\n  #main[_ngcontent-%COMP%] {\r\n\tmargin:auto;\r\n\tbackground:white;\r\n\tborder-radius:1%;\r\n\tbox-shadow: -2px 2px 10px -8px #000, 2px -2px 5px -10px #000;\r\n\twidth:98%;\r\n\tz-index:1;\r\n\theight:95%;\r\n  }\r\n\r\n  #main-head[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tmargin : 10px 2.5%;\r\n\tpadding: 0 10px 20px 10px;\r\n\tborder-bottom: 1px solid;\r\n\tfont-size:25px;\r\n\tmin-height:25px;\r\n  }\r\n\r\n  #main-body[_ngcontent-%COMP%] {\r\n\tmax-height:100%;\r\n\tmargin : 10px 0 10px 2.5%;\r\n\tpadding: 10px 1.5%;\r\n\tfont-size:25px;\r\n\toverflow:auto;\r\n  }\r\n\r\n  #modal[_ngcontent-%COMP%] {\r\n\tdisplay: none; \r\n\tposition: fixed; \r\n\tz-index: 99; \r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100%; \r\n\theight: 100%; \r\n\toverflow: auto; \r\n\tbackground-color: rgb(0,0,0); \r\n\tbackground-color: rgba(0,0,0,0.4); \r\n  }\r\n\r\n  #modal-content[_ngcontent-%COMP%] {\r\n\tbackground-color: #fefefe;\r\n\tmargin: 20% auto; \r\n\tpadding: 20px;\r\n\tborder: 1px solid #888;\r\n\twidth: 25%; \r\n  }\r\n\r\n  .modal-close[_ngcontent-%COMP%] {\r\n\tcursor:pointer;\r\n\tfloat: right;\r\n\tfont-size: 28px;\r\n\tfont-weight: bold;\r\n  }\r\n\r\n  #addFileInput[_ngcontent-%COMP%] {\r\n\tdisplay : none;\r\n  }\r\n\r\n  #addFolderInput[_ngcontent-%COMP%] {\r\n\tdisplay : none;\r\n  }\r\n\r\n  #renameFileInput[_ngcontent-%COMP%] {\r\n\tdisplay : none;\r\n  }\r\n\r\n  #renameFolderInput[_ngcontent-%COMP%] {\r\n\tdisplay : none;\r\n  }\r\n\r\n  #backbtn[_ngcontent-%COMP%] {\r\n\tcursor:pointer;\r\n  }\r\n\r\n  #breadcrumbs[_ngcontent-%COMP%] {\r\n\twhite-space: nowrap;\r\n\twidth:65%;\r\n\toverflow:scroll;\r\n\toverflow-y:hidden;\r\n\tmargin-left:3%;\r\n  }\r\n\r\n  #breadcrumbs[_ngcontent-%COMP%]::-webkit-scrollbar-track\r\n  {\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tbackground-color: #F5F5F5;\r\n  }\r\n\r\n  #breadcrumbs[_ngcontent-%COMP%]::-webkit-scrollbar\r\n  {\r\n\twidth: 2px;\r\n\theight:0px;\r\n\tbackground-color: #F5F5F5;\r\n  }\r\n\r\n  #breadcrumbs[_ngcontent-%COMP%]::-webkit-scrollbar-thumb\r\n  {\r\n\tbackground-color: #c0c0c0;\r\n  }\r\n\r\n  .adfoicons[_ngcontent-%COMP%] {\r\n\tbackground-color: white;\r\n\tposition:absolute;\r\n\tz-index: 3;\r\n\tright:0;\r\n\tmargin-right:5%;\r\n\tcursor:pointer;\r\n\tfloat:right;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n\tmargin: 15px;\r\n\tcursor: pointer;\r\n\tdisplay: inline-block;\r\n\twidth: 15.5%;\r\n\tborder-radius: 5%;\r\n\tbox-shadow: 0 2px 10px -3px #000;\r\n  }\r\n\r\n  .card-delete[_ngcontent-%COMP%] {\r\n\ttop:0;\r\n\tfloat:right;\r\n\tmargin: 5px 10px 0 0;\r\n  }\r\n\r\n  .card-icon[_ngcontent-%COMP%] {\r\n\ttop:0;\r\n\theight:120px;\r\n\tfont-size: 4em;\r\n\ttext-align:center;\r\n\tvertical-align:center;\r\n  }\r\n\r\n  .card-title[_ngcontent-%COMP%] {\r\n\tbottom:0;\r\n\tpadding:10px;\r\n  }\r\n\r\n  .cartelame[_ngcontent-%COMP%] {\r\n\tdisplay:inline-block;\r\n\tpadding-left: 5px;\r\n\tmax-width: 70%;\r\n\twhite-space: nowrap;\r\n\toverflow:hidden;\r\n\ttext-overflow: ellipsis;\r\n  }\r\n\r\n  .card-rename[_ngcontent-%COMP%] {\r\n\tz-index:3;\r\n\tfloat:right;\r\n\tmargin: 0 5px 10px 0;\r\n  }\r\n\r\n  #footer[_ngcontent-%COMP%] {\r\n\tposition:absolute;\r\n\tbottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n\tz-index:10;\r\n    height: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #1976d2;\r\n  }\r\n\r\n  \r\n\r\n  @media screen and (max-width: 999px) {\r\n\t.left-icon[_ngcontent-%COMP%] {\r\n\t  display:block;\r\n\t}\r\n\t\r\n\t#explorer[_ngcontent-%COMP%] {\r\n\t  width: 0;\r\n\t  transition: width .35s;\r\n\t}\r\n\t#explorer.open[_ngcontent-%COMP%] {\r\n\t  width: 60%;\r\n\t}\r\n\t#main[_ngcontent-%COMP%] {\r\n\t  width:100%;\t\r\n\t}\r\n\t\r\n\tul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%] {\r\n\t  list-style-type: none;\r\n\t  padding: 0;\r\n\t  margin: 0 0 0 5px;\r\n\t}\r\n\t\r\n\t#myUL[_ngcontent-%COMP%] {\r\n\t  margin: 0 0 0 5px;\r\n\t}\r\n\t\r\n\t#main-head[_ngcontent-%COMP%] {\r\n\t  font-size:20px;\r\n\t  min-height:20px;\r\n\t}\r\n\t#main-body[_ngcontent-%COMP%] {\r\n\t  font-size:17px;\r\n\t}\r\n\t.card[_ngcontent-%COMP%] {\r\n\t  margin: 15px;\r\n\t  width: 20%;\r\n\t}\r\n  }\r\n\r\n  @media screen and (max-width: 729px) {\r\n\t#main-head[_ngcontent-%COMP%] {\r\n\t  font-size:17px;\r\n\t  min-height:17px;\r\n\t}\r\n\t#main-body[_ngcontent-%COMP%] {\r\n\t  font-size:15px;\r\n\t}\r\n\t.card[_ngcontent-%COMP%] {\r\n\t  margin: 10px;\r\n\t  width: 18%;\r\n\t}\r\n\t .card-icon[_ngcontent-%COMP%] {\r\n\theight:70px;\r\n   }\r\n  }\r\n\r\n  @media screen and (max-width: 375px) {\r\n\t.card[_ngcontent-%COMP%] {\r\n\t  margin: 10px;\r\n\t  width: 25%;\r\n\t}\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsMEpBQTBKO0lBQzFKLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7RUFDcEM7O0VBRUE7Ozs7OztJQU1FLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGtCQUFrQjtDQUNyQixpQkFBaUI7Q0FDakIsV0FBVztJQUNSLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0NBQ0QsV0FBVztDQUNYLGlCQUFpQjtFQUNoQjs7RUFFQTtDQUNELFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLE9BQU87Q0FDUCxpQkFBaUI7Q0FDakIsV0FBVztFQUNWOztFQUVBO0NBQ0QsWUFBWTtDQUNaLE1BQU07RUFDTDs7RUFFQTtDQUNELFlBQVk7Q0FDWixhQUFhO0NBQ2IsYUFBYTtFQUNaOztFQUVBO0NBQ0QsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLE9BQU87Q0FDUCxLQUFLO0NBQ0wsUUFBUTtDQUNSLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsVUFBVTtFQUNUOztFQUNBO0NBQ0QsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsNERBQTREO0NBQzVELGFBQWE7Q0FDYixTQUFTO0NBQ1QsU0FBUztDQUNULFVBQVU7Q0FDVixNQUFNO0NBQ04sbUJBQW1CO0VBQ2xCOztFQUVEO0dBQ0UscUJBQXFCO0dBQ3JCLFVBQVU7R0FDVixrQkFBa0I7Q0FD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RSxVQUFVO0NBQ1o7O0NBRUE7R0FDRSxxQkFBcUI7R0FDckIsVUFBVTtHQUNWLGlCQUFpQjtDQUNuQjs7Q0FFQTtHQUNFLGlCQUFpQjtDQUNuQjs7Q0FFQTtHQUNFLGNBQWM7R0FDZCxlQUFlO0NBQ2pCO0NBQ0E7R0FDRSxjQUFjO0NBQ2hCO0NBQ0E7R0FDRSxZQUFZO0dBQ1osVUFBVTtDQUNaO0VBQ0M7O0VBRUE7Q0FDRDtHQUNFLGNBQWM7R0FDZCxlQUFlO0NBQ2pCO0NBQ0E7R0FDRSxjQUFjO0NBQ2hCO0NBQ0E7R0FDRSxZQUFZO0dBQ1osVUFBVTtDQUNaO0VBQ0M7Q0FDRCxXQUFXO0dBQ1Q7RUFDRDs7RUFFQztDQUNGO0dBQ0UsWUFBWTtHQUNaLFVBQVU7Q0FDWjtHQUNFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxyXG4gIDpob3N0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB9XHJcblxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRwYWRkaW5nOiAycHggMTBweDtcclxuXHR6LWluZGV4OiAxMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sYmFyIGltZyB7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbiAgXHJcbiAgLnJpZ2h0LXRpdGxlIHtcclxuXHRtYXJnaW46YXV0bztcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnJpZ2h0IHtcclxuXHRkaXNwbGF5OmZsZXg7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0dmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG5cdHJpZ2h0OjA7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0ZmxvYXQ6cmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWZ0LWljb24ge1xyXG5cdGRpc3BsYXk6bm9uZTtcclxuXHRsZWZ0OjA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mdWxsLWNvbnRhaW5lciB7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0b3ZlcmZsb3c6YXV0bztcclxuICB9XHJcbiAgXHJcbiAgI3BhZ2Uge1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdG1hcmdpbi10b3A6NjBweDtcclxuXHRtYXJnaW4tYm90dG9tOjMwcHg7XHJcblx0bGVmdDowO1xyXG5cdHJpZ2h0OjA7XHJcblx0dG9wOjA7XHJcblx0Ym90dG9tOjA7XHJcblx0YmFja2dyb3VuZDogI0Y1RjVGNTtcclxuXHRkaXNwbGF5IDogZmxleDtcclxuXHR3aWR0aDoxMDAlO1xyXG4gIH1cclxuICAjZXhwbG9yZXIge1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRiYWNrZ3JvdW5kOndoaXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6MiU7XHJcblx0Ym94LXNoYWRvdzogMnB4IDJweCAxMHB4IC04cHggIzAwMCwgLTJweCAtMnB4IDVweCAtMTBweCAjMDAwO1xyXG5cdG92ZXJmbG93OmF1dG87XHJcblx0ei1pbmRleDo5O1xyXG5cdHdpZHRoOjIwJTtcclxuXHRoZWlnaHQ6OTUlO1xyXG5cdGxlZnQ6MDtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICBcclxuXHR1bCwgb2wge1xyXG5cdCAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cdCAgcGFkZGluZzogMDtcclxuXHQgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuXHR9XHJcblx0XHJcblx0I215VUwge1xyXG5cdCAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG5cdH1cclxuXHRcclxuXHQuY2FyZXQge1xyXG5cdCAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG5cdCAgY3Vyc29yOiBwb2ludGVyO1xyXG5cdCAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpIDMuMSsgKi9cclxuXHQgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggMisgKi9cclxuXHQgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTArICovXHJcblx0ICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHR9XHJcblxyXG5cdC5jYXJldDo6YmVmb3JlIHtcclxuXHQgIGNvbnRlbnQ6IFwiXFwyNUI3XCI7XHJcblx0ICBjb2xvcjogYmxhY2s7XHJcblx0ICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0ICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuXHR9XHJcblxyXG5cdC5jYXJldC1kb3duOjpiZWZvcmUge1xyXG5cdCAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgLyogSUUgOSAqL1xyXG5cdCAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7IC8qIFNhZmFyaSAqL1xyXG5cdCAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAgXHJcblx0fVxyXG5cclxuXHQub3Blbmxpc3Qge1xyXG5cdCAgZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cclxuXHQuY2xvc2VsaXN0IHtcclxuXHQgIGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdFxyXG4gICNtYWluIHtcclxuXHRtYXJnaW46YXV0bztcclxuXHRiYWNrZ3JvdW5kOndoaXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6MSU7XHJcblx0Ym94LXNoYWRvdzogLTJweCAycHggMTBweCAtOHB4ICMwMDAsIDJweCAtMnB4IDVweCAtMTBweCAjMDAwO1xyXG5cdHdpZHRoOjk4JTtcclxuXHR6LWluZGV4OjE7XHJcblx0aGVpZ2h0Ojk1JTtcclxuICB9XHJcbiAgXHJcbiAgI21haW4taGVhZCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW4gOiAxMHB4IDIuNSU7XHJcblx0cGFkZGluZzogMCAxMHB4IDIwcHggMTBweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcblx0Zm9udC1zaXplOjI1cHg7XHJcblx0bWluLWhlaWdodDoyNXB4O1xyXG4gIH1cclxuICAgI21haW4tYm9keSB7XHJcblx0bWF4LWhlaWdodDoxMDAlO1xyXG5cdG1hcmdpbiA6IDEwcHggMCAxMHB4IDIuNSU7XHJcblx0cGFkZGluZzogMTBweCAxLjUlO1xyXG5cdGZvbnQtc2l6ZToyNXB4O1xyXG5cdG92ZXJmbG93OmF1dG87XHJcbiAgfVxyXG4gIFxyXG4gICNtb2RhbCB7XHJcblx0ZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuXHRwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuXHR6LWluZGV4OiA5OTsgLyogU2l0IG9uIHRvcCAqL1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcblx0aGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG5cdG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgfVxyXG4gICNtb2RhbC1jb250ZW50IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG5cdG1hcmdpbjogMjAlIGF1dG87IC8qIDUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcblx0d2lkdGg6IDI1JTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxuICB9XHJcbiAgLm1vZGFsLWNsb3NlIHtcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAjYWRkRmlsZUlucHV0IHtcclxuXHRkaXNwbGF5IDogbm9uZTtcclxuICB9XHJcbiAgI2FkZEZvbGRlcklucHV0IHtcclxuXHRkaXNwbGF5IDogbm9uZTtcclxuICB9XHJcbiAgI3JlbmFtZUZpbGVJbnB1dCB7XHJcblx0ZGlzcGxheSA6IG5vbmU7XHJcbiAgfVxyXG4gICNyZW5hbWVGb2xkZXJJbnB1dCB7XHJcblx0ZGlzcGxheSA6IG5vbmU7XHJcbiAgfVxyXG4gICNiYWNrYnRuIHtcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxuICB9XHJcbiAgI2JyZWFkY3J1bWJzIHtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdHdpZHRoOjY1JTtcclxuXHRvdmVyZmxvdzpzY3JvbGw7XHJcblx0b3ZlcmZsb3cteTpoaWRkZW47XHJcblx0bWFyZ2luLWxlZnQ6MyU7XHJcbiAgfVxyXG4gICNicmVhZGNydW1iczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxuICB7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gIH1cclxuICAjYnJlYWRjcnVtYnM6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbiAge1xyXG5cdHdpZHRoOiAycHg7XHJcblx0aGVpZ2h0OjBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gIH1cclxuICAjYnJlYWRjcnVtYnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXHJcbiAge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGZvaWNvbnMge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHotaW5kZXg6IDM7XHJcblx0cmlnaHQ6MDtcclxuXHRtYXJnaW4tcmlnaHQ6NSU7XHJcblx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0ZmxvYXQ6cmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuXHRtYXJnaW46IDE1cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMTUuNSU7XHJcblx0Ym9yZGVyLXJhZGl1czogNSU7XHJcblx0Ym94LXNoYWRvdzogMCAycHggMTBweCAtM3B4ICMwMDA7XHJcbiAgfVxyXG4gIC5jYXJkLWRlbGV0ZSB7XHJcblx0dG9wOjA7XHJcblx0ZmxvYXQ6cmlnaHQ7XHJcblx0bWFyZ2luOiA1cHggMTBweCAwIDA7XHJcbiAgfVxyXG4gIC5jYXJkLWljb24ge1xyXG5cdHRvcDowO1xyXG5cdGhlaWdodDoxMjBweDtcclxuXHRmb250LXNpemU6IDRlbTtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHR2ZXJ0aWNhbC1hbGlnbjpjZW50ZXI7XHJcbiAgfVxyXG4gIC5jYXJkLXRpdGxlIHtcclxuXHRib3R0b206MDtcclxuXHRwYWRkaW5nOjEwcHg7XHJcbiAgfVxyXG4gIC5jYXJ0ZWxhbWUge1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmctbGVmdDogNXB4O1xyXG5cdG1heC13aWR0aDogNzAlO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuICAuY2FyZC1yZW5hbWUge1xyXG5cdHotaW5kZXg6MztcclxuXHRmbG9hdDpyaWdodDtcclxuXHRtYXJnaW46IDAgNXB4IDEwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvb3RlciB7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0Ym90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG5cdHotaW5kZXg6MTA7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgfVxyXG5cclxuICAvKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5OXB4KSB7XHJcblx0LmxlZnQtaWNvbiB7XHJcblx0ICBkaXNwbGF5OmJsb2NrO1xyXG5cdH1cclxuXHRcclxuXHQjZXhwbG9yZXIge1xyXG5cdCAgd2lkdGg6IDA7XHJcblx0ICB0cmFuc2l0aW9uOiB3aWR0aCAuMzVzO1xyXG5cdH1cclxuXHQjZXhwbG9yZXIub3BlbiB7XHJcblx0ICB3aWR0aDogNjAlO1xyXG5cdH1cclxuXHQjbWFpbiB7XHJcblx0ICB3aWR0aDoxMDAlO1x0XHJcblx0fVxyXG5cdFxyXG5cdHVsLCBvbCB7XHJcblx0ICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0ICBwYWRkaW5nOiAwO1xyXG5cdCAgbWFyZ2luOiAwIDAgMCA1cHg7XHJcblx0fVxyXG5cdFxyXG5cdCNteVVMIHtcclxuXHQgIG1hcmdpbjogMCAwIDAgNXB4O1xyXG5cdH1cclxuXHRcclxuXHQjbWFpbi1oZWFkIHtcclxuXHQgIGZvbnQtc2l6ZToyMHB4O1xyXG5cdCAgbWluLWhlaWdodDoyMHB4O1xyXG5cdH1cclxuXHQjbWFpbi1ib2R5IHtcclxuXHQgIGZvbnQtc2l6ZToxN3B4O1xyXG5cdH1cclxuXHQuY2FyZCB7XHJcblx0ICBtYXJnaW46IDE1cHg7XHJcblx0ICB3aWR0aDogMjAlO1xyXG5cdH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI5cHgpIHtcclxuXHQjbWFpbi1oZWFkIHtcclxuXHQgIGZvbnQtc2l6ZToxN3B4O1xyXG5cdCAgbWluLWhlaWdodDoxN3B4O1xyXG5cdH1cclxuXHQjbWFpbi1ib2R5IHtcclxuXHQgIGZvbnQtc2l6ZToxNXB4O1xyXG5cdH1cclxuXHQuY2FyZCB7XHJcblx0ICBtYXJnaW46IDEwcHg7XHJcblx0ICB3aWR0aDogMTglO1xyXG5cdH1cclxuXHQgLmNhcmQtaWNvbiB7XHJcblx0aGVpZ2h0OjcwcHg7XHJcbiAgIH1cclxuICB9XHJcbiAgXHJcbiAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcblx0LmNhcmQge1xyXG5cdCAgbWFyZ2luOiAxMHB4O1xyXG5cdCAgd2lkdGg6IDI1JTtcclxuXHR9XHJcbiAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\xampp\htdocs\tdrive\tdrive\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map