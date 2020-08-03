import React from 'react';
import styles from './page.less';
import { Button } from 'antd';

class Page extends React.Component {
    render() {
        return(
            <div className={styles.page}>this is page.....
            
            <Button type="primary"> hello</Button>
            </div>
        )
    }
}
export default Page;