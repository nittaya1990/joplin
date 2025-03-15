export default function() {
	return [
		'attachFile',
		'copyDevCommand',
		'exportPdf',
		'focusElementNoteBody',
		'focusElementNoteViewer',
		'focusElementNoteList',
		'focusElementNoteTitle',
		'focusElementSideBar',
		'focusElementToolbar',
		'focusSearch',
		'historyBackward',
		'historyForward',
		'insertDateTime',
		'newFolder',
		'newNote',
		'newSubFolder',
		'newTodo',
		'openProfileDirectory',
		'print',
		'setTags',
		'showLocalSearch',
		'showNoteContentProperties',
		'permanentlyDeleteNote',
		'synchronize',
		'textBold',
		'textCode',
		'textCopy',
		'textCut',
		'textItalic',
		'textLink',
		'textPaste',
		'textSelectAll',
		'textBulletedList',
		'toggleExternalEditing',
		'openNoteInNewWindow',
		'toggleLayoutMoveMode',
		'resetLayout',
		'toggleMenuBar',
		'toggleNoteList',
		'toggleNotesSortOrderField',
		'toggleNotesSortOrderReverse',
		'togglePerFolderSortOrder',
		'toggleSideBar',
		'toggleVisiblePanes',
		'toggleEditorPlugin',
		'toggleTabMovesFocus',
		'editor.deleteLine',
		'editor.duplicateLine',
		// We cannot put the undo/redo commands in the menu because they are
		// editor-specific commands. If we put them there it will break the
		// undo/redo in regular text fields.
		// https://github.com/laurent22/joplin/issues/6214

		// 'editor.undo',
		// 'editor.redo',
		'editor.indentLess',
		'editor.indentMore',
		'editor.toggleComment',
		'editor.sortSelectedLines',
		'editor.swapLineUp',
		'editor.swapLineDown',
		'linkToNote',
		'exportDeletionLog',
		'toggleSafeMode',
		'showShareNoteDialog',
		'showShareFolderDialog',
		'leaveSharedFolder',
		'gotoAnything',
		'commandPalette',
		'openMasterPasswordDialog',
		'addProfile',
		'editProfileConfig',
		'switchProfile1',
		'switchProfile2',
		'switchProfile3',
		'pasteAsText',
		'showNoteProperties',
	];
}
