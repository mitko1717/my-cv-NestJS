// import { Controller, Patch, Param, Post, Body, UseGuards } from '@nestjs/common';
// import { CreateReportDto } from './dtos/create-report.dto';
// import { ReportsService } from './reports.service';
// import { AuthGuard } from '../guards/auth.guard';
// import { CurrentUser } from "src/users/decorators/current-user.decorators";
// import { User } from 'src/users/user.entity';
// import { ReportDto } from './dtos/report.dto';
// import { Serialize } from 'src/interceptors/serealize.interceptor';
// import { ApproveReportDto } from './dtos/approve-report.dto';
// import { AdminGuard } from '../guards/admin.guard';

// @Controller('reports')
// export class ReportsController {
//     constructor(private reportsService: ReportsService) {}

//     @Post()
//     // @UseGuards ensures that user is signed in before he can make a report
//     @UseGuards(AuthGuard)
//     // Serialize stands for i wanna serialize outgoing response following the
//     // rules we set up in ReportDto
//     @Serialize(ReportDto)
//     createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {        
//         return this.reportsService.create(body, user);
//     }

//     @Patch('/:id')
//     @UseGuards(AdminGuard)
//     // only admin use be able to approve a report
//     async approveReport(@Param('id') id: string, @Body() body: ApproveReportDto) {
//         return this.reportsService.changeApproval(id, body.approved)
//     }
// }

import {
    Controller,
    Post,
    Body,
    UseGuards,
    Patch,
    Param,
  } from '@nestjs/common';
  import { CreateReportDto } from './dtos/create-report.dto';
  import { ReportsService } from './reports.service';
  import { AuthGuard } from '../guards/auth.guard';
  import { CurrentUser } from 'src/users/decorators/current-user.decorators';
  import { User } from '../users/user.entity';
  import { ReportDto } from './dtos/report.dto';
  import { Serialize } from 'src/interceptors/serealize.interceptor';
  import { ApproveReportDto } from './dtos/approve-report.dto';
  import { AdminGuard } from '../guards/admin.guard';
  
  @Controller('reports')
  export class ReportsController {
    constructor(private reportsService: ReportsService) {}
  
    @Post()
    @UseGuards(AuthGuard)
    @Serialize(ReportDto)
    createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
      return this.reportsService.create(body, user);
    }
  
    @Patch('/:id')
    @UseGuards(AdminGuard)
    approveReport(@Param('id') id: string, @Body() body: ApproveReportDto) {
      return this.reportsService.changeApproval(id, body.approved);
    }
  }
  