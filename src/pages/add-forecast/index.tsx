import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useStore } from "@/zustand/store";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Logo } from "@/components/logo";

import { resolverForm, SearchLocationData } from './validateForm'
import { AddForecastsContainer } from './styles'

export function AddForecast() {
  const navigate = useNavigate()
  const { getLocations } = useStore()
  const formData = useForm<SearchLocationData>({
    resolver: resolverForm,
    defaultValues: { latitude: '', longitude: '' }
  })

  const { 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = formData

  function handleSearchLocation(data: SearchLocationData) {
    getLocations(data.latitude, data.longitude)
    navigate('/forecasts')
    reset()
  }

  return (
    <AddForecastsContainer>
      <Logo />
      <h2>Adicione as cordenadas do local desejado.</h2>
      <form onSubmit={handleSubmit(handleSearchLocation)}>
        <FormProvider {...formData}>
          <Input
            label="Latitude"
            placeholder="Insira a coordenada"
            name="latitude"
            error={errors.latitude?.message}
          />
          <Input
            label="Longitude"
            placeholder="Insira a coordenada"
            name="longitude"
            error={errors.longitude?.message}
          />
          <Button type="submit">Pesquisar</Button>
        </FormProvider>
      </form>
    </AddForecastsContainer>
  )
}
