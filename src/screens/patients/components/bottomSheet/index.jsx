import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import { SCREEN_PADDING, colors } from '../../../../constants'
import SensorRecord from '../sensorRecord'
import AsyncStorage from '@react-native-async-storage/async-storage'

const BottomSheetPatient = ({ bottomSheet, label = "", sheetData = [] }) => {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const data = JSON.parse(await AsyncStorage.getItem('sensorData'))
        setData(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <RBSheet
            closeOnDragDown={true}
            dragFromTopOnly
            minClosingHeight={100}
            // animationType='slide'
            ref={bottomSheet}
            closeOnPressMask
            height={600}
            openDuration={250}
            customStyles={{
                container: {
                    // justifyContent: "center",
                    alignItems: "center",
                    padding: 0,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    backgroundColor: colors.WHITE
                },
                draggableIcon: { top: 0, width: 50 }
            }}
        >
            <ScrollView style={{ width: "100%", padding: SCREEN_PADDING }} contentContainerStyle={{ rowGap: 20 }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "500", color: colors.BLACK, textAlign: "center" }}>{label}</Text>
                </View>
                <View style={{ rowGap: 10 }}>
                    {
                        sheetData?.map(item => (
                            <SensorRecord key={item.id} data={item} />

                        ))
                    }
                </View>
            </ScrollView>
        </RBSheet>
    )
}

export default BottomSheetPatient