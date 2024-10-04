function countryName({ params }: { params: { country_name: string } })
{
    return(
      <div>
        <h1>Country Name : {params.country_name}</h1>
      </div>
    )

}
export default countryName
