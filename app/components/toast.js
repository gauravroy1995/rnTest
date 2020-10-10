import React, {Component} from 'react';
import Toast, {DURATION} from 'react-native-easy-toast';

const showToaster = args => {
  this.toast.show(args, 3000);
};

const GlobalToast = () => {
  return (
    <Toast
      ref={toast => {
        this.toast = toast;
      }}
      style={{
        width: '80%',
        justifyContent: 'flex-end',
        backgroundColor: '#36e4ff',
        top: -10,
      }}
      position="bottom"
      textStyle={{alignSelf: 'center', color: 'black', fontSize: 16}}
    />
  );
};

export {showToaster, GlobalToast};
