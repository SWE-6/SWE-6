import React, { Component, useEffect, useState } from "react";
import { FormControl, TextField, Button, Grid } from "@material-ui/core";
import api from '../api';


function PatientForm({ exam: patient }) {
    const [age, setAge] = useState(patient.age)
    const [sex, setSex] = useState(patient.sex)
    const [race, setRace] = useState(patient.race)
    const [zip, setZip] = useState(patient.zip)
    const [bmi, setBmi] = useState(patient.bmi)
    const [weight, setwWight] = useState(patient.weight)
    const [height, setHeight] = useState(patient.height)
    const [tuberculosis, setTuberculosis] = useState(patient.tuberculosis)
    const [systemicLupus, setSystemicLupus] = useState(patient.systemicLupus)
    const [arthritis, setArthritis] = useState(patient.arthritis)
    const [extensiveBurns, setExtensiveBurns] = useState(patient.extensiveBurns)
    const [asplenia, setAsplenia] = useState(patient.asplenia)
    const [hyposplenia, setHyposplenia] = useState(patient.hyposplenia)
    const [measles, setMeasles] = useState(patient.measles)
    const [cytomegalovirus, setCytomegalovirus] = useState(patient.cytomegalovirus)
    const [chickenPox, setChickenPox] = useState(patient.chickenPox)
    const [herpesZoster, setHerpesZoster] = useState(patient.herpesZoster)
    const [malnutrition, setMalnutrition] = useState(patient.malnutrition)
    const [currentPregnant, setCurrentPregnant] = useState(patient.currentPregnant)
    const [diabetesType1, setDiabetesType1] = useState(patient.diabetesType1)
    const [diabetesType2, setDiabetesType2] = useState(patient.diabetesType2)
    const [transplant, setTransplant] = useState(patient.transplant)
    const [preDiagnosisHemodialysis, setPreDiagnosisHemodialysis] = useState(patient.preDiagnosisHemodialysis)
    const [postDiagnosisHemodialysis, setPostDiagnosisHemodialysis] = useState(patient.postDiagnosisHemodialysis)
    const [cancer, setCancer] = useState(patient.cancer)
    const [covidPositive, setCovidPositive] = useState(patient.covidPositive)
    const [testName, setTestName] = useState(patient.testName)
    const [icuAdmittance, setIcuAdmittance] = useState(patient.icuAdmittance)
    const [numOfIcuAdmits, setNumOfIcuAdmits] = useState(patient.numOfIcuAdmits)
    const [mortality, setMortality] = useState(patient.mortality)

    const handleSubmit = e => {
        const patient = {
            age: age,
            sex: sex,
            race: race,
            zip: zip,
            bmi: bmi,
            weight: weight,
            height: height,
            tuberculosis: tuberculosis,
            systemicLupusErythnatosus: systemicLupus,
            rheumatoidArthritis: arthritis,
            extensiveBurns: extensiveBurns,
            asplenia: asplenia,
            hyposplenia: hyposplenia,
            measles: measles,
            cytomegalovirus: cytomegalovirus,
            chickenPox: chickenPox,
            herpesZoster: herpesZoster,
            malnutrition: malnutrition,
            currentPregnant: currentPregnant,
            diabetesType1: diabetesType1,
            diabetesType2: diabetesType2,
            transplant: transplant,
            preDiagnosisHemodialysis: preDiagnosisHemodialysis,
            postDiagnosisHemodialysis: postDiagnosisHemodialysis,
            cancer: cancer,
            covidPositive: covidPositive,
            testName: testName,
            icuAdmittance: icuAdmittance,
            numOfIcuAdmits: numOfIcuAdmits,
            mortality: mortality,
        }
        api.insertExam(patient)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.error("Error in PatientForm: ", err))
        e.preventDefault()
    }

    // Update form values
    useEffect(() => {
        api.getPatientByID(patient.id)
            .then(res => {
                const patient_data = res.data[0]
                setAge(patient_data.age)
                setSex(patient_data.sex)
                setRace(patient_data.race)
                setZip(patient_data.zip)
                setBmi(patient_data.bmi)
                setwWight(patient_data.weight)
                setHeight(patient_data.height)
                setTuberculosis(patient_data.tuberculosis)
                setSystemicLupus(patient_data.systemicLupusErythnatosus)
                setArthritis(patient_data.rheumatoidArthritis)
                setExtensiveBurns(patient_data.extensiveBurns)
                setAsplenia(patient_data.asplenia)
                setHyposplenia(patient_data.hyposplenia)
                setMeasles(patient_data.measles)
                setCytomegalovirus(patient_data.cytomegalovirus)
                setChickenPox(patient_data.chickenPox)
                setHerpesZoster(patient_data.herpesZoster)
                setMalnutrition(patient_data.malnutrition)
                setCurrentPregnant(patient_data.currentPregnant)
                setDiabetesType1(patient_data.diabetesType1)
                setDiabetesType2(patient_data.diabetesType2)
                setTransplant(patient_data.transplant)
                setPreDiagnosisHemodialysis(patient_data.preDiagnosisHemodialysis)
                setPostDiagnosisHemodialysis(patient_data.postDiagnosisHemodialysis)
                setCancer(patient_data.cancer)
                setCovidPositive(patient_data.covidPositive)
                setTestName(patient_data.testName)
                setIcuAdmittance(patient_data.icuAdmittance)
                setNumOfIcuAdmits(patient_data.numOfIcuAdmits)
                setMortality(patient_data.mortality)
            })
            .catch(err => console.log(err))
    }, [patient])
    // Prevent labels from overlapping with input when exam loads: InputLabelProps={{ shrink: age ? true : false }}
    return (
        <form onSubmit={handleSubmit}>
            <FormControl >
                <TextField value={age} defaultValue={patient.age} required={true}
                    onChange={e => setAge(e.target.value)}
                    InputLabelProps={{ shrink: age ? true : false }}
                    name="age" label="Patient ID" margin="normal" variant="outlined" />

                <TextField value={sex} type="number" defaultValue={patient.sex} required={true}
                    onChange={e => setSex(e.target.value)}
                    InputLabelProps={{ shrink: sex ? true : false }}
                    name="sex" label="Days To Image Study" margin="normal" variant="outlined" />

                <TextField value={race} type="number" defaultValue={patient.race} required={true}
                    onChange={e => setRace(e.target.value)}
                    InputLabelProps={{ shrink: race ? true : false }}
                    name="race" label="Hours To Image Study" margin="normal" variant="outlined" />

                <TextField value={zip} defaultValue={patient.zip} required={true}
                    onChange={e => setZip(e.target.value)}
                    InputLabelProps={{ shrink: zip ? true : false }}
                    name="zip" label="Image Description" margin="normal" variant="outlined" />

                <TextField value={bmi} defaultValue={patient.bmi} required={true}
                    onChange={e => setBmi(e.target.value)}
                    InputLabelProps={{ shrink: bmi ? true : false }}
                    name="bmi" label="Study Modality" margin="normal" />

                <TextField value={weight} type="number" defaultValue={patient.weight} required={true}
                    onChange={e => setWeight(e.target.value)}
                    InputLabelProps={{ shrink: weight ? true : false }}
                    name="weight" label="Oxygen at Time of Study" margin="normal" variant="outlined" />
 
                <TextField value={height} defaultValue={patient.height} required={true}
                    onChange={e => setHeight(e.target.value)}
                    InputLabelProps={{ shrink: height ? true : false }}
                    name="height" label="Key Findings" margin="normal" variant="outlined" />

                <TextField value={tuberculosis} defaultValue={patient.tuberculosis}
                    onChange={e => setTuberculosis(e.target.value)}
                    InputLabelProps={{ shrink: tuberculosis ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={systemicLupus} defaultValue={patient.systemicLupus}
                    onChange={e => setSystemicLupus(e.target.value)}
                    InputLabelProps={{ shrink: systemicLupus ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={arthritis} defaultValue={patient.arthritis}
                    onChange={e => setArthritis(e.target.value)}
                    InputLabelProps={{ shrink: arthritis ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={extensiveBurns} defaultValue={patient.extensiveBurns}
                    onChange={e => setExtensiveBurns(e.target.value)}
                    InputLabelProps={{ shrink: extensiveBurns ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={asplenia} defaultValue={patient.asplenia}
                    onChange={e => setAsplenia(e.target.value)}
                    InputLabelProps={{ shrink: asplenia ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={hyposplenia} defaultValue={patient.hyposplenia}
                    onChange={e => setHyposplenia(e.target.value)}
                    InputLabelProps={{ shrink: hyposplenia ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={measles} defaultValue={patient.measles}
                    onChange={e => setMeasles(e.target.value)}
                    InputLabelProps={{ shrink: measles ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={cytomegalovirus} defaultValue={patient.cytomegalovirus}
                    onChange={e => setCytomegalovirus(e.target.value)}
                    InputLabelProps={{ shrink: cytomegalovirus ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={chickenPox} defaultValue={patient.chickenPox}
                    onChange={e => setChickenPox(e.target.value)}
                    InputLabelProps={{ shrink: chickenPox ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={herpesZoster} defaultValue={patient.herpesZoster}
                    onChange={e => setHerpesZoster(e.target.value)}
                    InputLabelProps={{ shrink: herpesZoster ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={malnutrition} defaultValue={patient.malnutrition}
                    onChange={e => setMalnutrition(e.target.value)}
                    InputLabelProps={{ shrink: malnutrition ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={currentPregnant} defaultValue={patient.currentPregnant}
                    onChange={e => setCurrentPregnant(e.target.value)}
                    InputLabelProps={{ shrink: currentPregnant ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={diabetesType1} defaultValue={patient.diabetesType1}
                    onChange={e => setDiabetesType1(e.target.value)}
                    InputLabelProps={{ shrink: diabetesType1 ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={diabetesType2} defaultValue={patient.diabetesType2}
                    onChange={e => setDiabetesType2(e.target.value)}
                    InputLabelProps={{ shrink: diabetesType2 ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={transplant} defaultValue={patient.transplant}
                    onChange={e => setTransplant(e.target.value)}
                    InputLabelProps={{ shrink: transplant ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={preDiagnosisHemodialysis} defaultValue={patient.preDiagnosisHemodialysis}
                    onChange={e => setPreDiagnosisHemodialysis(e.target.value)}
                    InputLabelProps={{ shrink: preDiagnosisHemodialysis ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={postDiagnosisHemodialysis} defaultValue={patient.postDiagnosisHemodialysis}
                    onChange={e => setPostDiagnosisHemodialysis(e.target.value)}
                    InputLabelProps={{ shrink: postDiagnosisHemodialysis ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={cancer} defaultValue={patient.cancer}
                    onChange={e => setCancer(e.target.value)}
                    InputLabelProps={{ shrink: cancer ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={covidPositive} defaultValue={patient.covidPositive}
                    onChange={e => setCovidPositive(e.target.value)}
                    InputLabelProps={{ shrink: covidPositive ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={testName} defaultValue={patient.testName}
                    onChange={e => setTestName(e.target.value)}
                    InputLabelProps={{ shrink: testName ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={icuAdmittance} defaultValue={patient.icuAdmittance}
                    onChange={e => setIcuAdmittance(e.target.value)}
                    InputLabelProps={{ shrink: icuAdmittance ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={numOfIcuAdmits} defaultValue={patient.numOfIcuAdmits} required={true}
                    onChange={e => setNumOfIcuAdmits(e.target.value)}
                    InputLabelProps={{ shrink: numOfIcuAdmits ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <TextField value={mortality} defaultValue={patient.mortality} required={true}
                    onChange={e => setMortality(e.target.value)}
                    InputLabelProps={{ shrink: mortality ? true : false }}
                    name="tuberculosis" label="Image" margin="normal" variant="outlined" />

                <Button variant="contained" color="primary" type="submit">Submit Patient</Button>
            </FormControl>
        </form>

    )
}

export default ExamForm