import { BottomSheetModal } from "@gorhom/bottom-sheet"
import React, { forwardRef, useMemo } from "react"
import { Text } from "react-native"

export type Ref = BottomSheetModal

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], [])

  return (
    <BottomSheetModal ref={ref} snapPoints={snapPoints}>
      <Text>BottomSheet</Text>
    </BottomSheetModal>
  )
})

export default BottomSheet
