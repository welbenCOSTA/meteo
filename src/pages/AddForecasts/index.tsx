import { useForm, FormProvider } from "react-hook-form";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FormData, resolverForm } from './validationForm'

import { AddForecastContainer } from "./styled";


export const AddForecasts = () => {
  const formData = useForm<FormData>({
    resolver: resolverForm,
    defaultValues: {
      latitude: '',
      longitude: ''
    }
  })

  const { handleSubmit, formState: { errors } } = formData

  const handleAddLocalization = (data: FormData) => {
    console.log('data =>', data)
  }

  return (
    <AddForecastContainer>
      <h1>Add Coordinates</h1>
      <form onSubmit={handleSubmit(handleAddLocalization)}>
        <FormProvider {...formData}>
          <Input
            error={errors.latitude?.message}
            registerName="latitude"
            id="latitude"
            label="Latitude"
          />
          <Input
            error={errors.longitude?.message}
            registerName="longitude"
            id="longitude"
            label="Longitude"
          />
          <Button type="submit">Enviar</Button>
        </FormProvider>
      </form>
    </AddForecastContainer>
  );
}