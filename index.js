var Wrapper = React.createClass({
  render: function(){
    return(
    	<div className="wrapper">
    		<Navigation />
    		<EditArea />    		
    	</div>
    );
  }
});

var	Navigation = React.createClass({
	render: function(){
		return(
			<div className="navigation">
    		<a href="#" ><div className="btn-all-notes">All Notes</div></a>
			</div>
		);
	}
});

var	EditArea = React.createClass({

	componentDidMount: function () {
		var date = new Date();
		var currentDate = date.toDateString();
		this.editor = ace.edit("react-editor");
		this.editor.setTheme("ace/theme/monokai");
		this.editor.getSession().setMode("ace/mode/javascript");
		this.editor.focus();
		this.editor.setValue(currentDate +" \n");
		this.editor.gotoLine(2);
	},

	getEditorContent: function(){
		return(this.editor.getValue());
	},

	render: function(){
		return(
			<div className="edit-area">
				<div id="react-editor" className="react-editor"></div>
				<SaveButton editorContent={this.getEditorContent}/>
			</div>
		);
	}
});

var SaveButton = React.createClass({
	editorValue: function(){
		var content = this.props.editorContent()
		console.log(content)
	},

	handleSubmit: function(e){
		e.preventDefault();
		this.editorValue();
	},

	render: function(){
		return(
			<a href="#" ><div className="btn-all-notes" onClick={this.handleSubmit}>Save</div></a>
		);
	}
});

React.render(
  <Wrapper />,
  document.getElementById('main-container')
);






// var React = require('react');

// var ace = require('brace');
// require('brace/mode/javascript');
// require('brace/mode/html');
// require('brace/theme/solarized_light');

// module.exports = React.createClass({
//     getDefaultProps: function () {
//         return {
//             mode: 'javascript',
//             initialValue: '',
//             onBlur: function () { },
//             onCodeChange: function (newCode) {
//                 console.log('Code changed to', newCode);
//             }
//         };
//     },
//     componentDidMount: function () {
//         this.editor = ace.edit(this.getDOMNode());
//         this.editSession = this.editor.getSession();

//         this.editor.getSession().setMode('ace/mode/' + this.props.mode);
//         this.editor.setTheme('ace/theme/solarized_light');

//         this.editor.focus();
//         this.editor.setValue(this.props.initialValue, -1);

//         this.editor.on('blur', function () {
//             this.props.onCodeChange(this.editor.getValue().split('\n'));
//             this.props.onBlur();
//         }.bind(this));
//     },

//     componentWillUnmount: function () {
//         this.editor.destroy();
//     },

//     render: function () {
//         return (
//             <div className="ace-editor-wrapper"></div>
//         );
//     }
// });