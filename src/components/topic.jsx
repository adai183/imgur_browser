var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState: function () {
    return {
      images: []
    }
  },
  componentWillMount: function () {
    Actions.getImages(this.props.params.id);
  },
  render: function () {
    return <div>
      render topic with ID {this.props.params.id}!
    </div>
  },
  onChange: function (event, images) {
    this.setState({images: images});
  }
})
