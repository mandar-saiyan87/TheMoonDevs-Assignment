import React from 'react'
// import CircularProgress
// import IconFilter
// import AppIcon


interface Props {
  txProgress: boolean;
  executeBurn: () => void;
}


function BurnBtn({ txProgress, executeBurn }: Props) {
  return (
    <Button
      variant="outlined"
      onClick={executeBurn}
      startIcon={
        txProgress ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          <AppIcon
            url="/icons/fire.svg"
            fill={IconFilter.primary}
            size={1.5}
            margin={0}
          />
        )
      }
    >
      <span>{txButton}</span>
    </Button>
  )
}

export default BurnBtn
