import React from 'react';
import { TableListItem, Icon } from '@ohif/ui';

const ColouredCircle = ({ color }) => {
  return (
    <div
      className="segment-color"
      style={{ backgroundColor: `rgba(${color.join(',')})` }}
    ></div>
  );
};

const SegmentItem = ({ index, label, onClick, itemClass, color }) => (
  <TableListItem
    key={index}
    itemKey={index}
    itemIndex={index}
    itemClass={itemClass}
    itemMeta={<ColouredCircle color={color} />}
    itemMetaClass="segment-color-section"
    onItemClick={onClick}
  >
    <div>
      <div className="segment-label" style={{ marginBottom: 4 }}>
        {label}
      </div>
      {false && <div className="segment-info">{'...'}</div>}
      <div className="segment-actions">
        <button
          className="btnAction"
          onClick={() => console.log('Relabelling...')}
        >
          <span style={{ marginRight: '4px' }}>
            <Icon name="edit" width="14px" height="14px" />
          </span>
          Relabel
          </button>
        <button
          className="btnAction"
          onClick={() => console.log('Editing description...')}
        >
          <span style={{ marginRight: '4px' }}>
            <Icon name="edit" width="14px" height="14px" />
          </span>
          Description
          </button>
      </div>
    </div>
  </TableListItem>
);

export default SegmentItem;