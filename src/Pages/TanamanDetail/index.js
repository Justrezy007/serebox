import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import { colors } from '../../Utils'
import { Clipboard } from "../../Resources"
import Task from "../../Components/Task"

const TanamanDetail = () => {
    return (
        <ScrollView style={styles.page}>
            <Task day={1} time={30} medan={0.2} status="done" />
            <Task day={2} time={45} medan={0.2} status="pending" />
            <Task day={3} time={20} medan={0.2} status="pending" />
            <Task day={4} time={10} medan={0.2} status="pending" />
            <Task day={5} time={5} medan={0.2} status="pending" />
            <Task day={5} time={5} medan={0.2} status="pending" />
            <Task day={5} time={5} medan={0.2} status="pending" />
            <Task day={5} time={5} medan={0.2} status="pending" />
            <Task day={5} time={5} medan={0.2} status="pending" />
            <Task day={5} time={5} medan={0.2} status="pending" />
            <Task day={5} time={5} medan={0.2} status="pending" />
        </ScrollView>
    )
}

export default TanamanDetail

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: colors.Primary,
    },
})