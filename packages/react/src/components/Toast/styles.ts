import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  background: '$gray800',
  borderRadius: '$md',
  width: '20rem',
  overflow: 'hidden',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '$3 $5',
  gap: '$1',

  position: 'absolute',
  zIndex: 99999,

  svg: {
    color: '$gray200',
  },

  variants: {
    toastPosition: {
      topRight: {
        top: 0,
        right: 0,
        marginTop: '$8',
        marginRight: '$8',
      },
      bottomRight: {
        bottom: 0,
        right: 0,
        marginBottom: '$8',
        marginRight: '$8',
      },
      topLeft: {
        top: 0,
        left: 0,
        marginTop: '$8',
        marginLeft: '$8',
      },
      bottomLeft: {
        bottom: 0,
        left: 0,
        marginBottom: '$8',
        marginLeft: '$8',
      },
    },
  },

  defaultVariants: {
    toastPosition: 'bottomRight',
  },
})

export const ToastTitleContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
})

export const ToastTitle = styled('p', {
  width: '80%',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  fontFamily: '$default',
  color: '$white',
  margin: 0,
})

export const ToastMessage = styled('p', {
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray200',
  margin: 0,
})
