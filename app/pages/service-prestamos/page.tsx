"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { DollarSign, Calculator, Info, Send, Calendar, ClipboardList } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from 'next/link'

const LoanComponent = () => {
  const [loanAmount, setLoanAmount] = useState(500)
  const [loanTerm, setLoanTerm] = useState(12)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [paymentSchedule, setPaymentSchedule] = useState<Array<{ 
    month: number, 
    loanAmount: number,
    interest: number,
    principal: number,
    payment: number, 
    remainingBalance: number 
  }>>([])

  const loanTypes = [
    { name: "Básico", range: "100 - 400", interest: 10 },
    { name: "Intermedio", range: "500 - 900", interest: 7 },
    { name: "Avanzado", range: "1000+", interest: 5 }
  ]

  const getInterestRate = (amount: number) => {
    if (amount < 500) return 10;
    if (amount < 1000) return 7;
    return 5;
  }

  const calculateLoan = useCallback(() => {
    const monthlyInterestRate = getInterestRate(loanAmount) / 100;
    const totalPayments = loanTerm;
    
    const monthlyPayment = (loanAmount * monthlyInterestRate) / 
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    setMonthlyPayment(monthlyPayment);

    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;
    setTotalInterest(totalInterest);

    let remainingBalance = loanAmount;
    const schedule = [];

    for (let month = 1; month <= totalPayments; month++) {
      const interest = remainingBalance * monthlyInterestRate;
      const principal = monthlyPayment - interest;
      remainingBalance -= principal;

      schedule.push({
        month,
        loanAmount: loanAmount,
        interest,
        principal,
        payment: monthlyPayment,
        remainingBalance: Math.max(remainingBalance, 0)
      });

      if (remainingBalance <= 0) break;
    }

    setPaymentSchedule(schedule);
  }, [loanAmount, loanTerm]);

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, loanTerm, calculateLoan]);

  const currentInterestRate = getInterestRate(loanAmount);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {/* Sección de Introducción */}
        <Card className="col-span-full bg-gradient-to-r from-purple-400 to-blue-500 dark:from-purple-800 dark:to-blue-900 text-white">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-center">
              Servicio de Préstamos 
            </CardTitle>
            <CardDescription className="text-center text-gray-100 text-sm sm:text-base">
              Soluciones financieras adaptadas a tus necesidades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-sm sm:text-base">
              En MW Bienes Inmuebles, ofrecemos una variedad de opciones de préstamos para ayudarte a alcanzar tus metas financieras.
            </p>
          </CardContent>
        </Card>

        {/* Tarjetas de tipos de préstamo */}
        {loanTypes.map((loan, index) => (
          <Card key={index} className="col-span-full sm:col-span-1 lg:col-span-2 flex flex-col justify-between bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-purple-700 dark:text-purple-300 text-lg sm:text-xl">
                <span>{loan.name}</span>
                <DollarSign className="text-green-500 dark:text-green-400" />
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Rango: ${loan.range}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xl sm:text-2xl font-bold text-center text-green-600 dark:text-green-400">
                {loan.interest}% <span className="text-xs sm:text-sm font-normal text-gray-600 dark:text-gray-400">de interés mensual</span>
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Ideal para {index === 0 ? "pequeñas emergencias" : index === 1 ? "proyectos medianos" : "grandes inversiones"}
              </p>
            </CardFooter>
          </Card>
        ))}

        {/* Calculadora de préstamo */}
        <Card className="col-span-full row-start-5 md md:row-start-3  lg:col-start-5 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-700 dark:text-purple-300 text-lg sm:text-xl">
              <Calculator className="mr-2" />
              Calculadora de Préstamo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4">
            <div>
              <Label htmlFor="loan-amount" className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Monto del préstamo ($)
              </Label>
              <div className="flex items-center gap-2 sm:gap-4">
                <Input
                  id="loan-amount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="flex-grow text-sm sm:text-base"
                />
                <span className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                  ${loanAmount}
                </span>
              </div>
              <Slider
                value={[loanAmount]}
                onValueChange={(value) => setLoanAmount(value[0])}
                max={2000}
                step={100}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="loan-term" className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Plazo del préstamo (meses)
              </Label>
              <Input
                id="loan-term"
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="text-sm sm:text-base"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow">
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Tasa de interés: <span className="font-bold text-purple-600 dark:text-purple-400">{currentInterestRate}% mensual</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Pago mensual: <span className="font-bold text-green-600 dark:text-green-400">${monthlyPayment.toFixed(2)}</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                Interés total: <span className="font-bold text-green-600 dark:text-green-400">${totalInterest.toFixed(2)}</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tabla de amortización */}
        <Card className="col-span-full row-start-6 md:row-start-4 lg:row-start-3 lg:col-span-4 lg:col-start-1 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-700 dark:text-purple-300 text-lg sm:text-xl">
              <Calendar className="mr-2" />
              Calendario de Pagos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table className="text-xs sm:text-sm">
                <TableHeader>
                  <TableRow>
                    <TableHead>Mes</TableHead>
                    <TableHead>Monto</TableHead>
                    <TableHead>Interés</TableHead>
                    <TableHead>Capital</TableHead>
                    <TableHead>Pago</TableHead>
                    <TableHead>Saldo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentSchedule.map((payment, index) => (
                    <TableRow key={index}>
                      <TableCell>{payment.month}</TableCell>
                      <TableCell>${payment.loanAmount.toFixed(2)}</TableCell>
                      <TableCell>${payment.interest.toFixed(2)}</TableCell>
                      <TableCell>${payment.principal.toFixed(2)}</TableCell>
                      <TableCell>${payment.payment.toFixed(2)}</TableCell>
                      <TableCell>${payment.remainingBalance.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Información Adicional */}
        <Card className="col-span-full lg:col-span-2 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-700 dark:text-purple-300 text-lg sm:text-xl">
              <Info className="mr-2" />
              Información Adicional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              <li>Sistema de interés compuesto mensual</li>
              <li>Los intereses se calculan sobre el saldo pendiente</li>
              <li>Amortización decreciente con pagos constantes</li>
              <li>Sin cargos adicionales ni comisiones</li>
              <li>Proceso de aprobación en 24-48 horas</li>
            </ul>
          </CardContent>
        </Card>

        {/* Requisitos para Optar */}
        <Card className="col-span-full lg:col-span-2 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-700 dark:text-purple-300 text-lg sm:text-xl">
              <ClipboardList className="mr-2" />
              Requisitos para Optar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              <li>Ser mayor de edad (mínimo 18 años)</li>
              <li>Cédula de identidad vigente</li>
              <li>Comprobante de ingresos reciente</li>
              <li>Historial crediticio positivo</li>
              <li>Cuenta bancaria activa</li>
            </ul>
          </CardContent>
          <CardFooter>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              * Todos los documentos deben estar actualizados
            </p>
          </CardFooter>
        </Card>

        {/* Contacto WhatsApp */}
        <Card className="col-span-full lg:col-span-2 bg-gradient-to-br from-green-200 to-green-300 dark:from-green-800 dark:to-green-700">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700 dark:text-green-300 text-lg sm:text-xl">
              <FaWhatsapp className="mr-2 w-6 h-6 sm:w-7 sm:h-7" />
              Contacto por WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              ¿Necesitas asesoría? Contáctanos directamente por WhatsApp.
            </p>
          </CardContent>
          <CardFooter>
            <Link 
              href="https://wa.me/50558288462" 
              className="w-full bg-green-500 hover:bg-green-600 text-white flex justify-center items-center py-2 rounded-xl text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="mr-2" />
              Iniciar Chat
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default LoanComponent