import { COLORS, INPUTS, MARGIN } from '@/constants/theme'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'

interface SecuredPasswordInputProps extends TextInputProps {
    placeholder: string
    value: string;
    secured: boolean;
    label: string;
    setValue: (text: string) => void;
    setSearch: (val: boolean) => void;
    disabled: boolean;
    search: boolean;
  }

const SecuredInput = ({value, setValue, setSearch, placeholder, secured, label, disabled, search}: SecuredPasswordInputProps) => {
    const [ showPassword, setShowPassword ] = useState(false)
  return (
         <View style={styles.inputComponent}>
            <View>
                <Text style={disabled? styles.disabledInput : styles.inputText}>{label}</Text>
            </View>
            <View style={[
                styles.inputContainer,
                styles.passwordExtras,
                disabled? styles.disabledBorder: styles.border
                ]}>
                <TextInput 
                    style={styles.input}
                    value={value}
                    onChangeText={setValue}
                    placeholderTextColor={COLORS.secondary}
                    placeholder={placeholder}
                    passwordRules={"required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"}
                    secureTextEntry={!showPassword}
                    editable={!disabled}  // Disable input when isPickup=true

                    />

                {   secured &&
                    <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
                    <FontAwesome5
                        name={showPassword? 'eye-slash' : 'eye'}
                        size={15}
                        color={COLORS.accent}
                        />
                    </TouchableOpacity>
                }
                {
                    search &&
                    <TouchableOpacity onPress={() => setSearch(true)}>
                    <FontAwesome5
                        name={ 'search'}
                        size={15}
                        color={COLORS.accent}
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
  )
}

const styles = StyleSheet.create({

    inputContainer:{
        flexDirection:'row',
        borderRadius: INPUTS.radius, 
        borderWidth: 1,
    },
    passwordExtras:{
        alignItems:'center'
    },
    input:{
        padding: 12,
        fontSize: 14,
        width:'90%'
    },
    inputText:{
        paddingBottom: 10,
        fontWeight:'bold'
    },
    inputComponent:{
        marginBottom: MARGIN.bottom
    },
    disabledInput: {
        color: COLORS.grayLight,
         paddingBottom: 10,
        fontWeight:'bold'
      },
    disabledBorder: {
        borderColor: COLORS.gray,
    },
    border:{
        borderColor: COLORS.text_border,
    }
    
})

export default SecuredInput
