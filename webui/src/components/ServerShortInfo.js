// @flow
// TODO: move to uikit
import * as React from 'react';
import { css } from 'react-emotion';
import { HealthStatus, LeaderFlag, Text, UriLabel } from '@tarantool.io/ui-kit';

const styles = {
  item: css`
    position: relative;
    padding: 12px 16px 12px 32px;
    border: solid 1px #E8E8E8;
    margin-bottom: 18px;
    border-radius: 4px;
    background-color: #ffffff;
    transition: 0.1s ease-in-out;
    transition-property: border-color, box-shadow;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.06);
  `,
  row: css`
    display: flex;
    align-items: baseline;
    margin-bottom: 4px;
  `,
  heading: css`
    margin-right: 12px;
    min-width: 50%;
  `,
  leaderFlag: css`
    position: absolute;
    top: 0;
    left: 3px;
  `
};

type ServerShortInfoProps = {
  activeMaster?: boolean,
  status?: string,
  uri: string,
  alias: string,
  message?: string,
  master?: boolean
};
export default class ServerShortInfo extends React.PureComponent<ServerShortInfoProps> {
  render() {
    const {
      activeMaster,
      status,
      uri,
      alias,
      message,
      master
    } = this.props;

    return (
      <div className={styles.item}>
        <div className={styles.row}>
          {(master || activeMaster) && (
            <LeaderFlag className={styles.leaderFlag} fail={status !== 'healthy'} />
          )}
          <div className={styles.heading}>
            <Text variant='h4'>{alias}</Text>
            <UriLabel uri={uri} />
          </div>
          <HealthStatus status={status} message={message} />
        </div>
      </div>
    )
  }
}
