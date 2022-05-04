import React, { useEffect } from 'react';
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

function Swiper() {
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.info('swipe action triggered')}>Action name</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive>Delete</SwipeAction>
    </TrailingActions>
  );
  return (
    <div>
      <SwipeableList>
        <SwipeableListItem trailingActions={trailingActions()}>Item content</SwipeableListItem>
        <SwipeableListItem trailingActions={trailingActions()}>Item content2</SwipeableListItem>
        <SwipeableListItem trailingActions={trailingActions()}>Item content3</SwipeableListItem>
        <SwipeableListItem trailingActions={trailingActions()}>Item content4</SwipeableListItem>
      </SwipeableList>
    </div>
  );
}

export default Swiper;
