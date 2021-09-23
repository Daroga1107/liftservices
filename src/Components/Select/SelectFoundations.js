import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'VPN', label: 'VPN' },
  { value: 'FastConnect', label: 'FastConnect' },
  { value: 'VCN', label: 'VCN' }
]

const SelectFoundations = () => (
  <Select options={options} />
)

export default SelectFoundations;