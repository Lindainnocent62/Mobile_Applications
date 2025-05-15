import React, { useState } from 'react'
import { StyleSheet, Text, TextInputProps, TouchableOpacity, View } from 'react-native'
import SecuredInput from './securedInput';
import { COLORS, MARGIN, SIZES } from '@/constants/theme';
import { RFPercentage } from 'react-native-responsive-fontsize';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface Disabled extends TextInputProps {
    disabled?: boolean;
  }

const Deliver_address = ( { disabled=false}: Disabled ) => {
    const [ buildingNr, setBuildingNr ] = useState('')
    const [ streetName, setStreetName ] = useState('')
    const [ suburb, setSuburb ] = useState('')
    const [ city, setCity ] = useState('')
    const [ province, setProvince ] = useState('')
    const [ country, setCountry] = useState('');
    const [ postal, setPostal ] = useState('')
    const [ search, setSearch ] = useState(false)

  return (
    <View style={styles.addressContainer}>
        <View style={styles.searchContainer}>
            <Text style={styles.addressTextHeader}>Address</Text>
            <TouchableOpacity style={styles.searchButton}>
                <FontAwesome5 
                    name={'search'}
                    size={18}
                    color={COLORS.primary}
                    />
            </TouchableOpacity>
        </View>
        <SecuredInput 
            placeholder={'Please enter building number'}
            value={buildingNr}
            setValue={setBuildingNr}
            secured={false}
            label={'Building Nr'}
            disabled={disabled}
            search={false}
            setSearch={()=>{}}
        />
        <SecuredInput 
            placeholder={'Please enter street name'}
            value={streetName}
            setValue={setStreetName}
            secured={false}
            label={'Street Name'}
            disabled={disabled}
            search={false}
            setSearch={()=>{}}
        />
        <SecuredInput 
            placeholder={'Please enter suburb name'}
            value={suburb}
            setValue={setSuburb}
            secured={false}
            label={'Suburb'}
            disabled={disabled}
            search={false}
            setSearch={()=>{}}
        />
        <SecuredInput 
            placeholder={'Please enter your city'}
            value={city}
            setValue={setCity}
            secured={false}
            label={'City'}
            disabled={disabled}
            search={false}
            setSearch={()=>{}}
        />
        <SecuredInput 
            placeholder={'Please enter your province'}
            value={province}
            setValue={setProvince}
            secured={false}
            label={'Province'}
            disabled={disabled}
            search={false}
            setSearch={()=>{}}
        />
        <SecuredInput 
            placeholder={'Please enter your country'}
            value={country}
            setValue={setCountry}
            secured={false}
            label={'Country'}
            disabled={disabled}
            search={false}
            setSearch={()=>{}}
        />
        <SecuredInput 
            placeholder={'Please enter your postal'}
            value={postal}
            setValue={setPostal}
            secured={false}
            label={'Postal'}
            disabled={disabled}
            search={false}
            setSearch={()=>{}}
        />
      
    </View>
  )
}

const styles = StyleSheet.create({
    addressContainer:{
        marginTop: 10
    },
    addressTextHeader: {
        fontWeight: 'bold',
        fontSize: RFPercentage(SIZES.large),
        marginVertical: MARGIN.bottom,
        marginRight: 10
    },
    searchContainer:{
        flexDirection: 'row',
        alignItems:'center'
    },
    searchButton:{
        marginTop:2
    }
})

export default Deliver_address
