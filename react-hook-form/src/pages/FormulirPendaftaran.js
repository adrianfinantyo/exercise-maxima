import React from "react"
import { Heading, Stack } from "@chakra-ui/layout"
import { Input, FormLabel, Button, Select, Radio, RadioGroup } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"

const FormulirPendaftaran = () => {
    const { register, handleSubmit } = useForm()
    const history = useHistory()

    const onSubmit = (data) => {
        console.log(data)
        history.push("/playground")
    }
    return(
        <div>
            <Heading>FORM</Heading>
            <form>
                <Stack>
                    <FormLabel>Nama Lengkap</FormLabel>
                        <Input type="text" {...register("FullName", {
                                required: {
                                    value: true,
                                    message: "Tidak boleh kosong"
                                },
                            })}/>
                    <FormLabel>NIM Masiswa</FormLabel>
                        <Input type="number" {...register("NIM")}/>
                    <FormLabel>Tanggal Lahir</FormLabel>
                        <Input type="number" {...register("Ttl")}/>
                    <FormLabel>Jenis Kelamin</FormLabel>
                        <Stack direction="row">
                            <RadioGroup>
                                <Radio value="male" {...register("gender")}>Male</Radio>
                                <Radio value="female" {...register("gender")}>Female</Radio>
                            </RadioGroup>
                        </Stack>
                    <FormLabel>Program Studi</FormLabel>
                        <Select placeholder="Pilih Prodi" {...register("Prodi")}>
                            <option value="Informatika">Informatika</option>
                            <option value="DKV">DKV</option>
                            <option value="Film">Film</option>
                        </Select>
                    <FormLabel>Email</FormLabel>
                        <Input type="email" {...register("email")}/>
                    <Button colorScheme="blue" onClick={ handleSubmit(onSubmit) }>SUBMIT</Button>
                </Stack>
            </form>
        </div>
    )
}

export default FormulirPendaftaran