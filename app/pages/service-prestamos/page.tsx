"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { DollarSign, Calculator, Info, Phone, Send, Calendar } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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
    { name: "Avanzado", range: "1000+", interest: 4 }
  ]

  const getInterestRate = (amount: number) => {
    if (amount < 500) return 10;
    if (amount < 1000) return 7;
    return 4;
  }

  const calculateLoan = () => {
    const interestRate = getInterestRate(loanAmount) / 100 / 12; // Monthly interest rate
    const totalPayments = loanTerm;
    
    // Calculate monthly payment
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -totalPayments));
    setMonthlyPayment(monthlyPayment);

    // Calculate total interest
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;
    setTotalInterest(totalInterest);

    // Calculate payment schedule
    let remainingBalance = loanAmount;
    const schedule = [];

    for (let month = 1; month <= totalPayments; month++) {
      const interest = remainingBalance * interestRate;
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
  }

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, loanTerm]);

  const currentInterestRate = getInterestRate(loanAmount);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {/* Introducción - Span completo */}
        <Card className="col-span-full md:row-start-1 bg-gradient-to-r from-purple-400 to-blue-500 dark:from-purple-800 dark:to-blue-900 text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Servicios de Préstamos M&W
            </CardTitle>
            <CardDescription className="text-center text-gray-100">
              Soluciones financieras adaptadas a tus necesidades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center">
              En M&W Bienes Inmuebles, ofrecemos una variedad de opciones de préstamos para ayudarte a alcanzar tus metas financieras. Ya sea que necesites un pequeño impulso o una inversión significativa, tenemos la solución perfecta para ti.
            </p>
          </CardContent>
        </Card>

        {/* Tarjetas de información de préstamos - Row 2, Columnas 1-3 */}
        {loanTypes.map((loan, index) => (
            <Card key={index} className="col-span-1 lg:col-span-2 md:row-start-2 flex flex-col justify-between bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 transition-all duration-300 hover:shadow-xl ">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-purple-700 dark:text-purple-300">
                <span>{loan.name}</span>
                <DollarSign className="text-green-500 dark:text-green-400" />
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">Rango: ${loan.range}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-center text-green-600 dark:text-green-400">
                {loan.interest}% <span className="text-sm font-normal text-gray-600 dark:text-gray-400">de interés</span>
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ideal para {index === 0 ? "pequeñas emergencias" : index === 1 ? "proyectos medianos" : "grandes inversiones"}
              </p>
            </CardFooter>
          </Card>
        ))}

        {/* Calculadora - Row 2, Columna 4 */}
        <Card className="md:col-span-1 lg:col-span-2 lg:col-start-5 md:row-start-3 lg:row-start-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-700 dark:text-purple-300">
              <Calculator className="mr-2" />
              Calculadora de Préstamo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="loan-amount" className="text-gray-700 dark:text-gray-300">Monto del préstamo ($)</Label>
                <div className="flex items-center space-x-4">
                  <Input
                    id="loan-amount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="flex-grow"
                  />
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">${loanAmount}</span>
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
                <Label htmlFor="loan-term" className="text-gray-700 dark:text-gray-300">Plazo del préstamo (meses)</Label>
                <Input
                  id="loan-term"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                />
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <p className="text-gray-700 dark:text-gray-300">Tasa de interés aplicada: <span className="font-bold text-purple-600 dark:text-purple-400">{currentInterestRate}%</span></p>
                <p className="text-gray-700 dark:text-gray-300">Pago mensual: <span className="font-bold text-green-600 dark:text-green-400">${monthlyPayment.toFixed(2)}</span></p>
                <p className="text-gray-700 dark:text-gray-300">Interés total ({loanTerm} meses): <span className="font-bold text-green-600 dark:text-green-400">${totalInterest.toFixed(2)}</span></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendario de Pagos - Nueva tarjeta */}
        <Card className="md:col-span-2 md:col-start-1 md:row-start-3 lg:col-span-4 lg:col-start-1 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-700 dark:text-purple-300">
              <Calendar className="mr-2" />
              Ejemplo de Calendario de Pagos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mes</TableHead>
                    <TableHead>Monto Prestado</TableHead>
                    <TableHead>Interés</TableHead>
                    <TableHead>Capital sin Interés</TableHead>
                    <TableHead>Pago Mensual</TableHead>
                    <TableHead>Balance Restante</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentSchedule.slice(0, 5).map((payment, index) => (
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
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              * Este es un ejemplo de los primeros 5 meses. El calendario completo se proporcionará al solicitar el préstamo.
            </p>
          </CardContent>
        </Card>

        {/* Información Adicional - Row 3, Columna 1 */}
        <Card className="md:col-span-full  lg:col-span-4 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-700 dark:text-purple-300">
              <Info className="mr-2" />
              Información Adicional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Nuestros préstamos están diseñados para adaptarse a diferentes necesidades y capacidades de pago.</li>
              <li>Ofrecemos tasas de interés competitivas que disminuyen a medida que aumenta el monto del préstamo.</li>
              <li>Los plazos de pago son flexibles, permitiéndote elegir el que mejor se ajuste a tu situación financiera.</li>
              <li>No cobramos comisiones por apertura o penalizaciones por pago anticipado.</li>
              <li>Proceso de solicitud rápido y sencillo, con aprobación en 24-48 horas.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contacto por WhatsApp - Row 3, Columna 2 */}
        <Card className="md:col-span-full lg:col-span-2 bg-gradient-to-br from-green-200 to-green-300 dark:from-green-800 dark:to-green-700">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700 dark:text-green-300">
              <Phone className="mr-2" />
              Contacto por WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              ¿Tienes preguntas sobre nuestros préstamos? ¡Contáctanos directamente por WhatsApp! Nuestro equipo está listo para atenderte y brindarte toda la información que necesitas.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              <Send className="mr-2" />
              Chatear por WhatsApp
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default LoanComponent

