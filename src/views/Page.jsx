import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './page.less';
import actions from '../actions/index';

class Page extends React.Component {
    state = {
    }

    render() {
        return(
          <div className={styles.page}>
           
            <Button type="primary" onClick={this.props.onIncrease}> add</Button>
            { this.props.count }
            <Button type="primary" onClick={this.props.onDecrease}> decrease</Button>
          </div>
        );
    }
}
Page.propTypes = {
    count: PropTypes.number,
}; 
const mapDispatchToProps = (dispatch) => ({
    onIncrease: () => dispatch(actions.increase()),
    onDecrease: () => dispatch(actions.decrease())
});

const mapStateToProps = (state) => ({ count: state.count });
export default connect(mapStateToProps, mapDispatchToProps)(Page);